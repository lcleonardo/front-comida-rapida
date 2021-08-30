import { Injectable } from '@angular/core';
import { HttpService, Options } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Descuento } from '../model/descuento';

@Injectable({
  providedIn: 'root'
})
export class DescuentoService {

  constructor(protected servicioHttp : HttpService) { }

  public consultar(): Observable<Descuento[]> {
    return this.servicioHttp.doGet<any>(
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

}
