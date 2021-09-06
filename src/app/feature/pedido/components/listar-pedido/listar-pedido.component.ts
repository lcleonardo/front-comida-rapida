import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../../shared/model/pedido";
import { PedidoService } from "../../shared/service/pedido.service";

@Component({
  selector: "app-listar-pedido",
  templateUrl: "./listar-pedido.component.html",
  styleUrls: [],
})
export class ListarPedidoComponent implements OnInit {
  pedidos: Observable<Pedido[]>;
  mensajeServidor: string = "";

  constructor(protected pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): void {
    this.pedidos = this.pedidoService.consultar();
  }

  eliminar(id: number): void {
    this.mensajeServidor= "";
    this.pedidoService.eliminar(id).subscribe(
      () => {},
      (error: HttpErrorResponse) => this.obtenerMensajeDelServidor(error)
    );
    this.consultar();
  }

  obtenerMensajeDelServidor(error: HttpErrorResponse): void {
    this.mensajeServidor = error.error["mensaje"];
  }
}
