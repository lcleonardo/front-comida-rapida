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
  empezarGuardado: boolean = false;
  pedidoCreadoConExito: boolean = false;
  mensajeError: string = "";

  constructor(
    protected servicioPedido: PedidoService,
    protected formatoFecha: DatePipe,
    protected enrutador: Router
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  guardar(): void {
    this.pedidoCreadoConExito = false;
    this.mensajeError = "";
    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.empezarGuardado = true;
    this.servicioPedido.guardar(this.obtenerPedido()).subscribe(
      () => this.prepararNuevoPedido(),
      (error) => this.manejarError(error)
    );
    this.empezarGuardado = false;
  }

  private prepararNuevoPedido(): void {
    this.formulario.reset();
    this.pedidoCreadoConExito = true;
    this.enrutador.navigate(["pedido/listar"]);
  }

  private manejarError(error: HttpErrorResponse): void {
    this.mensajeError = error.error["mensaje"];
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
        codigoCliente: new FormControl("", [Validators.required]),
        codigoProducto: new FormControl("", [Validators.required]),
        direccionDomicilio: new FormControl("", [Validators.required]),
        placaVehiculo: new FormControl("", [
          Validators.required,
          Validador.validarPlacaVehiculo,
        ]),
        precioCompra: new FormControl("", [
          Validators.required,
          Validador.menorOIgualACero,
        ]),
      },
      { updateOn: "blur" }
    );
  }

  vaciarMensajeError() {
    this.mensajeError = "";
  }

  mostrarMensajeError(): boolean {
    return this.mensajeError.length !== 0;
  }
}
