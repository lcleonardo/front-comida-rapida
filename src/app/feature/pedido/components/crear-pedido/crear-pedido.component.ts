import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";
import { DatePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Validador } from "@shared/utilidades/validador";

@Component({
  selector: "app-crear-pedido",
  templateUrl: "./crear-pedido.component.html",
  styleUrls: [],
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

  guardar(): void {
    this.mensajeServidor = "";
    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.servicio.guardar(this.obtenerPedido()).subscribe(
      () => {},
      (error) => this.obtenerMensajeServidor(error)
    );
    this.enrutador.navigate(["pedido/listar"]);
  }

  private obtenerMensajeServidor(error: HttpErrorResponse): void {
    this.mensajeServidor = error.error["mensaje"];
  }

  private obtenerPedido(): Pedido {
    return new Pedido(
      this.formulario.get("fecha").value,
      this.formulario.get("codigoCliente").value,
      this.formulario.get("codigoProducto").value,
      this.formulario.get("direccionDomicilio").value,
      this.formulario.get("placaVehiculo").value.toUpperCase(),
      this.formulario.get("precioCompra").value
    );
  }

  private construirFormulario(): void {
    this.formulario = new FormGroup(
      {
        fecha: new FormControl(
          this.formatoFecha.transform(Date.now(), "yyyy-MM-dd"),
          [Validators.required, Validador.fechaMenorAFechaActual]
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
          Validador.validarPlacaVehiculo,
          Validators.maxLength(25),
        ]),
        precioCompra: new FormControl("", [
          Validators.required,
          Validador.menorOIgualACero,
        ]),
      },
      { updateOn: "blur" }
    );
  }

  get placaVehiculo() {
    return this.formulario.get("placaVehiculo").value.toUpperCase();
  }
}
