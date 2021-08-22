import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-crear-pedido",
  templateUrl: "./crear-pedido.component.html",
  styleUrls: ["./crear-pedido.component.css"],
})
export class CrearPedidoComponent implements OnInit {
  pedidoForm: FormGroup;
  ejecutarTarea: boolean = false;
  pedidoCreadoConExito: boolean = false;

  constructor(
    protected pedidoService: PedidoService,
    protected formBuilder: FormBuilder,
    protected datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  cancelar(): void {
    this.construirFormulario();
    this.pedidoCreadoConExito = false;
    this.ejecutarTarea = false;
  }

  crear(): void {
    this.pedidoCreadoConExito = false;

    if (!this.pedidoForm.valid) {
      return;
    }

    this.ejecutarTarea = true;

    this.pedidoService
      .guardar(this.obtenerPedido());
    this.construirFormulario();

    this.ejecutarTarea = false;
    this.pedidoCreadoConExito = true;
  }

  private obtenerPedido(): Pedido {
    return {
      id: 0,
      fecha: this.pedidoForm.get("fecha").value,
      codigoProducto: this.pedidoForm.get("codigoProducto").value,
      codigoCliente: this.pedidoForm.get("codigoCliente").value,
      direccionDomicilio: this.pedidoForm.get("direccionDomicilio").value,
      placaVehiculo: this.pedidoForm.get("placaVehiculo").value,
      precioDomicilio: 0,
      precioTotalCompra: this.pedidoForm.get("precioTotalCompra").value,
    };
  }

  private construirFormulario(): void {
    this.pedidoForm = this.formBuilder.group({
      fecha: [
        this.datePipe.transform(Date.now(), "yyyy-MM-dd"),
        Validators.required,
      ],
      codigoProducto: ["", Validators.required],
      codigoCliente: ["", Validators.required],
      direccionDomicilio: ["", Validators.required],
      placaVehiculo: ["", Validators.required],
      precioTotalCompra: ["", Validators.required],
    });
  }
}
