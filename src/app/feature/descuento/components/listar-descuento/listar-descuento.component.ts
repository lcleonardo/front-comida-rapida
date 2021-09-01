import { Component, OnInit } from "@angular/core";
import { Descuento } from "../../shared/model/descuento";
import { DescuentoService } from "../../shared/service/descuento.service";

@Component({
  selector: "app-listar-descuento",
  templateUrl: "./listar-descuento.component.html",
  styleUrls: [],
})
export class ListarDescuentoComponent implements OnInit {
  listaDescuento: Descuento[] = [];

  constructor(protected servicioDescuento: DescuentoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): void {
    this.servicioDescuento
      .consultar()
      .subscribe((respuesta: Descuento[]) => (this.listaDescuento = respuesta));
  }

  eliminar(id: number): void {
    this.servicioDescuento.eliminar(id);
    this.consultar();
  }
}
