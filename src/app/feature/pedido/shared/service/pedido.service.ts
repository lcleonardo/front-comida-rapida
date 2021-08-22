import { Injectable } from "@angular/core";
import { HttpService, Options } from "@core/services/http.service";
import { Observable } from "rxjs";
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

  public guardar(pedido: Pedido): Observable<Options> {
    return this.http
      .doPost<Pedido, Options>(
        `${environment.endpoint}`,
        pedido,
        this.http.createDefaultOptions()
      );
  }

  public eliminar(id: number) {
    return this.http
      .doDelete<boolean>(
        `${environment.endpoint}/${id}`,
        this.http.optsName("eliminar pedido")
      )
      .subscribe((value) => console.log(value));
  }
}
