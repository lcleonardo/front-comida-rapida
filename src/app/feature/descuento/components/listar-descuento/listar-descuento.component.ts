import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogConfirmacionComponent } from '@shared/components/dialogo-confirmacion/dialogo.confirmacion.component';
import { Descuento } from '../../shared/model/descuento';
import { DescuentoService } from '../../shared/service/descuento.service';
import { CrearDescuentoComponent } from '../crear-descuento/crear-descuento.component';

@Component({
  selector: 'app-listar-descuento',
  templateUrl: './listar-descuento.component.html',
  styleUrls: ['./listar-descuento.component.css'],
})
export class ListarDescuentoComponent implements OnInit, OnDestroy {
  descuentos: Descuento[];
  filtro: string = '';
  displayedColumns: string[] = ['fecha', 'descuento', 'acciones'];

  constructor(
    protected servicioDescuento: DescuentoService,
    protected dialogo: MatDialog
  ) {}

  ngOnDestroy(): void {
    this.servicioDescuento.consultar().subscribe().unsubscribe();
  }

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.servicioDescuento
      .consultar()
      .subscribe((valor) => (this.descuentos = valor));
  }

  private abrirDialogoConfirmacion(): MatDialogRef<DialogConfirmacionComponent> {
    return this.dialogo.open(DialogConfirmacionComponent, {
      disableClose: true,
      width: '25%',
    });
  }

  eliminar(id: number): void {
    const dialogo = this.abrirDialogoConfirmacion();
    dialogo.afterClosed().subscribe(() => {
      if (dialogo.componentInstance.eliminar) {
        this.eliminarEnServicio(id);
      }
    });
  }

  private eliminarEnServicio(id: number) {
    this.servicioDescuento.eliminar(id).subscribe((respuesta: boolean) => {
      if (respuesta) {
        this.descuentos = this.descuentos.filter(
          (descuento: Descuento) => descuento.id !== id
        );
      }
    });
  }

  abrirDialogoCrearDescuento() {
    const dialogo = this.dialogo.open(CrearDescuentoComponent, {
      disableClose: true,
      width: '35%',
    });
    dialogo.afterClosed().subscribe(() => {
      this.consultar();
    });
  }

  contador(descuentos: Descuento[]): string {
    return descuentos.length === 1
      ? descuentos.length + ' descuento'
      : descuentos.length + ' descuentos';
  }
}
