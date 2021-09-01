import { Component, OnInit } from "@angular/core";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";

@Component({
  selector: "app-listar-pedido",
  templateUrl: "./listar-pedido.component.html",
  styleUrls: [],
})
export class ListarPedidoComponent implements OnInit {
  listaPedido: Pedido[] = [];

  constructor(protected pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): void {
    this.pedidoService
      .consultar()
      .subscribe((respuesta: Pedido[]) => (this.listaPedido = respuesta));
  }

  eliminar(id: number): void {
    this.pedidoService.eliminar(id);
    this.consultar();
  }
}
