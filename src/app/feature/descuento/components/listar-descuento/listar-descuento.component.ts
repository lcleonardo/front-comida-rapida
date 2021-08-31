import { Component, OnInit } from "@angular/core";
import { Descuento } from "../../shared/model/descuento";
import { DescuentoService } from "../../shared/service/descuento.service";

@Component({
  selector: "app-listar-descuento",
  templateUrl: "./listar-descuento.component.html",
  styleUrls: ["./listar-descuento.component.css"],
})
export class ListarDescuentoComponent implements OnInit {
  listaDescuento: Descuento[] = [];

  constructor(protected servicioDescuento: DescuentoService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): void {
    this.listaDescuento = [];
    this.servicioDescuento.consultar().subscribe(
      (response: Descuento[]) => this.llenarListaDescuento(response)
    );
  }

  private llenarListaDescuento(response: Descuento[]) {
    response.forEach((object: Descuento) => {
      this.listaDescuento.push(object);
      console.log(object);
    });
  }
}
