import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { Descuento } from "../../shared/model/descuento";
import { DescuentoService } from "../../shared/service/descuento.service";
import { CrearDescuentoComponent } from "../crear-descuento/crear-descuento.component";

@Component({
  selector: "app-listar-descuento",
  templateUrl: "./listar-descuento.component.html",
  styleUrls: ["./listar-descuento.component.css"],
})
export class ListarDescuentoComponent implements OnInit {
  filtro: string = "";
  descuentos: Observable<Descuento[]>;
  displayedColumns: string[] = ["fecha", "descuento", "acciones"];

  constructor(
    protected servicioDescuento: DescuentoService,
    protected dialogo: MatDialog
  ) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): void {
    this.descuentos = this.servicioDescuento.consultar();
  }

  eliminar(id: number): void {
    this.servicioDescuento.eliminar(id).subscribe();
    this.consultar();
  }

  abrirDialogo() {
    const dialogRef = this.dialogo.open(CrearDescuentoComponent, {
      disableClose: true,
      width: "35%",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  contador(descuentos: Descuento[]): string {
    return descuentos.length === 1
      ? descuentos.length + " descuento"
      : descuentos.length + " descuentos";
  }
}
