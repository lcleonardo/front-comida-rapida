import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";
import { DatePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-crear-pedido",
  templateUrl: "./crear-pedido.component.html",
  styleUrls: ["./crear-pedido.component.css"],
})
export class CrearPedidoComponent implements OnInit {
  formulario: FormGroup;
  empezarGuardado: boolean = false;
  pedidoCreadoConExito: boolean = false;
  mensajeError: string = "";

  constructor(
    protected pedidoService: PedidoService,
    protected constructorFormulario: FormBuilder,
    protected formatoFecha: DatePipe
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  cancelar(): void {
    this.construirFormulario();
    this.pedidoCreadoConExito = false;
    this.empezarGuardado = false;
  }

  crear(): void {
    this.pedidoCreadoConExito = false;
    this.mensajeError = "";
    if (!this.formulario.valid) {
      return;
    }
    this.empezarGuardado = true;
    this.pedidoService.guardar(this.obtenerPedido()).subscribe(
      () => this.prepararNuevoPedido(),
      (error) => this.manejarError(error)
    );
    this.empezarGuardado = false;
  }

  private prepararNuevoPedido(): void {
    this.construirFormulario();
    this.pedidoCreadoConExito = true;
  }

  private manejarError(error: HttpErrorResponse): void {
    this.mensajeError = error.error["mensaje"];
  }

  private obtenerPedido(): Pedido {
    return {
      id: 0,
      fecha: this.formulario.get("fecha").value,
      codigoProducto: this.formulario.get("codigoProducto").value,
      codigoCliente: this.formulario.get("codigoCliente").value,
      direccionDomicilio: this.formulario.get("direccionDomicilio").value,
      placaVehiculo: this.formulario.get("placaVehiculo").value.toUpperCase(),
      precioDomicilio: 0,
      precioTotalCompra: this.formulario.get("precioTotalCompra").value,
    };
  }

  private construirFormulario(): void {
    this.formulario = this.constructorFormulario.group({
      fecha: [
        this.formatoFecha.transform(Date.now(), "yyyy-MM-dd"),
        Validators.required,
      ],
      codigoProducto: ["", Validators.required],
      codigoCliente: ["", Validators.required],
      direccionDomicilio: ["", Validators.required],
      placaVehiculo: ["", Validators.required],
      precioTotalCompra: ["", Validators.required],
    });
  }

  vaciarMensajeError() {
    this.mensajeError = "";
  }

  mostrarMensajeError(): boolean {
    return this.mensajeError.length !== 0;
  }
}
