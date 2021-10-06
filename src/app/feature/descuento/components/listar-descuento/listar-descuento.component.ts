import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DialogConfirmacionComponent } from '@shared/components/dialogo-confirmacion/dialogo.confirmacion.component'
import { DialogoService } from '@shared/servicios/Dialogo.service'
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
    protected dialogo: MatDialog,
    protected matSnackBar: MatSnackBar,
    protected ngZone: NgZone,
    protected dialogoService: DialogoService,
  ) {}

  ngOnInit(): void {
    this.consultar()
    this.focus()
  }

  private focus(): void {
    setTimeout(() => this.inputFiltro.nativeElement.focus(), 300)
  }

  private consultar(): void {
    this.descuentos$ = this.descuentoService.consultar()
  }

  public eliminar(id: number): void {
    const dialogo = this.dialogoService.abrir(
      DialogConfirmacionComponent,
      true,
      50,
    )
    dialogo.afterClosed().subscribe(() => {
      if (dialogo.componentInstance.eliminar) {
        this.descuentoService.eliminar(id).subscribe(() => {
          this.consultar()
          this.openMatSnackBar('Descuento eliminado con exíto.')
          this.focus()
        })
      }
    })
  }

  public abrirDialogoCrearDescuento() {
    const dialogo = this.dialogo.open(CrearDescuentoComponent, {
      disableClose: true,
      width: '35%',
    })
    dialogo.afterClosed().subscribe(() => {
      this.consultar()
      this.focus()
    })
  }

  private openMatSnackBar(mensaje: string) {
    this.ngZone.run(() => {
      this.matSnackBar.open(mensaje, 'INFORMACIÓN', {
        duration: 6 * 1000,
      })
    })
  }

  public contador(descuentos: Descuento[]): string {
    return descuentos.length === 1
      ? descuentos.length + ' descuento'
      : descuentos.length + ' descuentos'
  }
}
