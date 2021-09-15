import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogConfirmacionComponent } from "@shared/components/dialogo-confirmacion/dialogo.confirmacion.component";
import { Descuento } from "../../shared/model/descuento";
import { DescuentoService } from "../../shared/service/descuento.service";
import { CrearDescuentoComponent } from "../crear-descuento/crear-descuento.component";
import { Observable } from "rxjs";

@Component({
  selector: "app-listar-descuento",
  templateUrl: "./listar-descuento.component.html",
  styleUrls: ["./listar-descuento.component.css"],
})
export class ListarDescuentoComponent implements OnInit, OnDestroy {
  descuentos: Observable<Descuento[]>;
  filtro: string = "";
  displayedColumns: string[] = ["fecha", "descuento", "acciones"];

  constructor(
    protected servicioDescuento: DescuentoService,
    protected dialogo: MatDialog
  ) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.descuentos = this.servicioDescuento.consultar();
  }

  eliminar(id: number): void {
    const dialogRef = this.dialogo.open(DialogConfirmacionComponent, {
      disableClose: true,
      width: "25%",
    });
    dialogRef.afterClosed().subscribe(() => {
      const respuesta: boolean = dialogRef.componentInstance.respuesta;
      if (respuesta) {
        this.servicioDescuento.eliminar(id).subscribe();
        this.consultar();
      }
    });
  }

  abrirDialogo() {
    const dialogRef = this.dialogo.open(CrearDescuentoComponent, {
      disableClose: true,
      width: "35%",
    });
    dialogRef.afterClosed().subscribe(() => {
      this.consultar();
    });
  }

  contador(descuentos: Descuento[]): string {
    return descuentos.length === 1
      ? descuentos.length + " descuento"
      : descuentos.length + " descuentos";
  }
}
