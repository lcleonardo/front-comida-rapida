import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";

@Component({
  selector: "app-crear-pedido",
  templateUrl: "./crear-pedido.component.html",
  styleUrls: ["./crear-pedido.component.css"],
})
export class CrearPedidoComponent implements OnInit {
  pedidoForm: FormGroup;

  constructor(
    protected pedidoService: PedidoService,
    protected formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  crear(): void {
    if (this.pedidoForm.valid) {
      let pedido: Pedido = {
        id: 0,
        fecha: this.pedidoForm.get("fecha").value,
        codigoProducto: this.pedidoForm.get("codigoProducto").value,
        codigoCliente: this.pedidoForm.get("codigoCliente").value,
        direccionDomicilio: this.pedidoForm.get("direccionDomicilio").value,
        placaVehiculo: this.pedidoForm.get("placaVehiculo").value,
        precioTotalCompra: this.pedidoForm.get("precioCompra").value,
      };
      this.pedidoService.guardar(pedido);
    }
  }

  private construirFormulario(): void {
    this.pedidoForm = this.formBuilder.group({
      fecha: ["", Validators.required],
      codigoProducto: ["", Validators.required],
      codigoCliente: ["", Validators.required],
      direccionDomicilio: ["", Validators.required],
      placaVehiculo: ["", Validators.required],
      precioCompra: ["", Validators.required],
    });
  }
}
