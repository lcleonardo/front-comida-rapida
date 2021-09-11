import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";

@Component({
  selector: "app-listar-pedido",
  templateUrl: "./listar-pedido.component.html",
  styleUrls: ["./listar-pedido.component.css"],
})
export class ListarPedidoComponent implements OnInit {
  displayedColumns: string[] = [
    "fecha",
    "codigoProducto",
    "codigoCliente",
    "direccionDomicilio",
    "placaVehiculo",
    "precioCompra",
    "porcentajeDescuento",
    "porcentajePromocion",
    "precioTotal",
    "acciones",
  ];
  pedidos: Observable<Pedido[]>;

  constructor(protected pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): void {
    this.pedidos = this.pedidoService.consultar();
  }

  eliminar(id: number): void {
    this.pedidoService.eliminar(id).subscribe();
    this.consultar();
  }
}
