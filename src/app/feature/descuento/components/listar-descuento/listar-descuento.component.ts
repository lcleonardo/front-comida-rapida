import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Descuento } from "../../shared/model/descuento";
import { DescuentoService } from "../../shared/service/descuento.service";

@Component({
  selector: "app-listar-descuento",
  templateUrl: "./listar-descuento.component.html",
  styleUrls: ["./listar-descuento.component.css"],
})
export class ListarDescuentoComponent implements OnInit {
  descuentos: Observable<Descuento[]>;

  displayedColumns: string[] = ["fecha", "descuento", "acciones"];

  constructor(protected servicioDescuento: DescuentoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): void {
    this.descuentos = this.servicioDescuento.consultar();
  }

  eliminar(id: number): void {
    this.servicioDescuento.eliminar(id);
    this.consultar();
  }
}
