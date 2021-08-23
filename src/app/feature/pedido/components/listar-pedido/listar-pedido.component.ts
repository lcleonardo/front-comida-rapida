import { Component, OnInit } from "@angular/core";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";

@Component({
  selector: "app-listar-pedido",
  templateUrl: "./listar-pedido.component.html",
  styleUrls: ["./listar-pedido.component.css"],
})
export class ListarPedidoComponent implements OnInit {
  listaPedido: Pedido[] = [];
  ejecutarTarea: boolean = false;

  constructor(protected pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.pedidoService
      .consultar()
      .subscribe((value: Pedido[]) => (this.listaPedido = value));
  }

  eliminar(id: number) {
    this.ejecutarTarea = true;
    this.pedidoService.eliminar(id);
    this.consultar();
    this.ejecutarTarea = false;
  }
}
