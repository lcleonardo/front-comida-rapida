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
  public listaPedido: Observable<Pedido[]>;

  constructor(protected pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.listaPedido = this.pedidoService.consultar();

    this.listaPedido.subscribe(value => console.log(value));
    
        
  }
}
