import { Injectable } from '@angular/core';
import { HttpService, Options } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Descuento } from '../model/descuento';

@Injectable()
export class DescuentoService {

  constructor(protected servicioHttp : HttpService) { }

  public consultar(): Observable<Descuento[]> {
    return this.servicioHttp.doGet<Descuento[]>(
      `${environment.endpoint}/descuentos`,
      this.servicioHttp.optsName("consultar descuentos")
    );
  }

  public guardar(descuento: Descuento) : Observable<Options>{
    return this.servicioHttp.doPost<Descuento, Options>(
      `${environment.endpoint}/descuentos`,
      descuento,
      this.servicioHttp.createDefaultOptions());
  }

  public eliminar(id: number) {
    return this.servicioHttp.doDelete<boolean>(
      `${environment.endpoint}/descuentos/${id}`,
      this.servicioHttp.optsName("eliminar descuentos")
    ).subscribe();
  }

}
