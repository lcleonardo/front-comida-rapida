import { Component, OnInit } from "@angular/core";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";

@Component({
  selector: "app-listar-pedido",
  templateUrl: "./listar-pedido.component.html",
  styleUrls: ["./listar-pedido.component.css"],
})
export class ListarPedidoComponent implements OnInit {
  public listaPedido: Pedido[] = [];

  constructor(protected pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService
      .consultar()
      .subscribe((value : Pedido[]) => (this.listaPedido = value));
  }
}
