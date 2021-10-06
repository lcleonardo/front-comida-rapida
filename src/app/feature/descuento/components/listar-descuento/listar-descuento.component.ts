import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DialogConfirmacionComponent } from '@shared/components/dialogo-confirmacion/dialogo.confirmacion.component'
import { SnackBarService } from '@shared/servicios/snackbar.service'
import { Observable } from 'rxjs'
import { Descuento } from '../../shared/model/descuento'
import { DescuentoService } from '../../shared/service/descuento.service'
import { CrearDescuentoComponent } from '../crear-descuento/crear-descuento.component'

@Component({
  selector: 'app-listar-descuento',
  templateUrl: './listar-descuento.component.html',
  styleUrls: ['./listar-descuento.component.css'],
})
export class ListarDescuentoComponent implements OnInit {
  public descuentos$: Observable<Descuento[]>
  public texto: string = ''
  public displayedColumns: string[] = ['fecha', 'descuento', 'acciones']
  @ViewChild('inputFiltro', { read: ElementRef }) inputFiltro: ElementRef

  constructor(
    protected descuentoService: DescuentoService,
    protected matDialog: MatDialog,
    protected snackBarService: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.consultar()
    this.focus()
  }

  private focus(): void {
    setTimeout(() => {
      this.inputFiltro.nativeElement.focus()
    }, 250)
  }

  private consultar(): void {
    this.descuentos$ = this.descuentoService.consultar()
  }

  public eliminar(id: number): void {
    const dialogo = this.matDialog.open(DialogConfirmacionComponent)
    dialogo.afterClosed().subscribe(() => {
      if (dialogo.componentInstance.eliminar) {
        this.descuentoService.eliminar(id).subscribe(() => {
          this.consultar()
          this.snackBarService.abrir('Descuento eliminado con exíto.')
        })
      }
      this.focus()
    })
  }

  public abrirDialogoCrearDescuento() {
    const dialogo = this.matDialog.open(CrearDescuentoComponent)
    dialogo.afterClosed().subscribe(() => {
      this.consultar()
      this.focus()
    })
  }

  public contador(descuentos: Descuento[]): string {
    return descuentos.length === 1
      ? descuentos.length + ' descuento'
      : descuentos.length + ' descuentos'
  }
}
