import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Descuento } from "../../shared/model/descuento";
import { DescuentoService } from "../../shared/service/descuento.service";

@Component({
  selector: "app-listar-descuento",
  templateUrl: "./listar-descuento.component.html",
  styleUrls: [],
})
export class ListarDescuentoComponent implements OnInit {
  descuentos: Observable<Descuento[]>;
  mensajeServidor: string = "";

  constructor(protected servicioDescuento: DescuentoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): void {
    this.descuentos = this.servicioDescuento.consultar();
  }

  eliminar(id: number): void {
    this.mensajeServidor = "";
    this.servicioDescuento.eliminar(id).subscribe(
      () => {},
      (error: HttpErrorResponse) => this.obtenerMensajeDelServidor(error)
    );
    this.consultar();
  }

  obtenerMensajeDelServidor(error: HttpErrorResponse): void {
    this.mensajeServidor = error.error["mensaje"];
  }
}
