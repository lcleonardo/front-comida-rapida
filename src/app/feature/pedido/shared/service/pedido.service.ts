import { Injectable } from "@angular/core";
import { HttpService, Options } from "@core/services/http.service";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Pedido } from "../model/pedido";

@Injectable()
export class PedidoService {
  constructor(protected servicioHttp: HttpService) {}

  public consultar(): Observable<Pedido[]> {
    return this.servicioHttp.doGet<Pedido[]>(
      `${environment.endpoint}/pedidos`,
      this.servicioHttp.optsName("consultar pedidos")
    );
  }

  public guardar(pedido: Pedido): Observable<Options> {
    return this.servicioHttp.doPost<Pedido, Options>(
      `${environment.endpoint}/pedidos`,
      pedido,
      this.servicioHttp.createDefaultOptions()
    );
  }

  public eliminar(id: number): Observable<boolean> {
    return this.servicioHttp.doDelete<boolean>(
      `${environment.endpoint}/pedidos/${id}`,
      this.servicioHttp.optsName("eliminar pedido")
    );
  }
}
