import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";

@Component({
  selector: "app-crear-pedido",
  templateUrl: "./crear-pedido.component.html",
  styleUrls: ["./crear-pedido.component.css"],
})
export class CrearPedidoComponent implements OnInit {
  pedidoForm: FormGroup;

  constructor(protected pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  crear(): void {
    const pedido: Pedido = {
      id: 1000,
      fecha: "2021-08-19",
      codigoCliente: "194911832",
      codigoProducto: "0001",
      direccionDomicilio: "San juan de carolina Calle 123",
      placaVehiculo: "VKH525",
      precioTotalCompra: 20000,
    };
    this.pedidoService.guardar(pedido);
  }

  private construirFormulario(): void {
    // this.pedidoForm = new FormGroup({});
  }
}
