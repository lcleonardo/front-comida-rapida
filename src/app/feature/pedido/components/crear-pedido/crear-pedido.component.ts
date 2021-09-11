import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PedidoService } from "../../shared/service/pedido.service";
import { DatePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { ValidadorFecha } from "@shared/validador/validador-fecha";
import { ValidadorComun } from "@shared/validador/validador-comun";

@Component({
  selector: "app-crear-pedido",
  templateUrl: "./crear-pedido.component.html",
  styleUrls: ["./crear-pedido.component.css"],
})
export class CrearPedidoComponent implements OnInit {
  formulario: FormGroup;
  mensajeServidor: string = "";

  constructor(
    protected servicio: PedidoService,
    protected formatoFecha: DatePipe,
    protected enrutador: Router
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  guardar(event: Event): void {
    event.preventDefault();
    this.mensajeServidor = "";
    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.servicio.guardar(this.formulario.value).subscribe(
      () => this.enrutador.navigate(["pedido/listar"]),
      (error) => this.obtenerMensajeServidor(error)
    );
  }

  private obtenerMensajeServidor(error: HttpErrorResponse): void {
    this.mensajeServidor = error.error["mensaje"];
  }

  private construirFormulario(): void {
    this.formulario = new FormGroup(
      {
        fecha: new FormControl(
          this.formatoFecha.transform(Date.now(), "yyyy-MM-dd"),
          [Validators.required, ValidadorFecha.fechaMenorAFechaActual]
        ),
        codigoCliente: new FormControl("", [
          Validators.required,
          Validators.maxLength(250),
        ]),
        codigoProducto: new FormControl("", [
          Validators.required,
          Validators.maxLength(250),
        ]),
        direccionDomicilio: new FormControl("", [
          Validators.required,
          Validators.maxLength(250),
        ]),
        placaVehiculo: new FormControl("", [
          Validators.required,
          ValidadorComun.validarPlacaVehiculo,
          Validators.maxLength(25),
        ]),
        precioCompra: new FormControl("", [
          Validators.required,
          ValidadorComun.menorOIgualACero,
        ]),
      },
      { updateOn: "blur" }
    );
  }
}
