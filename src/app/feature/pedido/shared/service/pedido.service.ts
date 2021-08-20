import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Pedido } from "../model/pedido";

@Injectable({
  providedIn: "root",
})
export class PedidoService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Pedido[]>(
       `${environment.endpoint}`,
      this.http.optsName("consultar pedidos")
    );
  }

  public guardar(pedido: Pedido) {
    return this.http.doPost<Pedido, boolean>(
      `${environment.endpoint}`,
      pedido,
      this.http.optsName("crear/actualizar pedidos")
    );
  }

  public eliminar(pedido: Pedido) {
    return this.http.doDelete<boolean>(
      `${environment.endpoint}/pedido/${pedido.id}`,
      this.http.optsName("eliminar pedido")
    );
  }
}
