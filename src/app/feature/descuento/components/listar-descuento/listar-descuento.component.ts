import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DialogConfirmacionComponent } from '@shared/components/dialogo-confirmacion/dialogo.confirmacion.component'
import { Descuento } from '../../shared/model/descuento'
import { DescuentoService } from '../../shared/service/descuento.service'
import { CrearDescuentoComponent } from '../crear-descuento/crear-descuento.component'

@Component({
  selector: 'app-listar-descuento',
  templateUrl: './listar-descuento.component.html',
  styleUrls: ['./listar-descuento.component.css'],
})
export class ListarDescuentoComponent implements OnInit, OnDestroy {
  public descuentos: Descuento[]
  public filtro: string = ''
  public displayedColumns: string[] = ['fecha', 'descuento', 'acciones']
  @ViewChild('input1', { read: ElementRef }) inputEl: ElementRef

  constructor(
    protected servicioDescuento: DescuentoService,
    protected dialogo: MatDialog,
    protected matSnackBar: MatSnackBar,
    protected ngZone: NgZone,
  ) {}

  ngOnDestroy(): void {
    this.servicioDescuento.consultar().subscribe().unsubscribe()
  }

  ngOnInit(): void {
    this.consultar()
    setTimeout(() => {
      this.inputEl.nativeElement.focus()
    }, 500)
  }

  private consultar() {
    this.servicioDescuento
      .consultar()
      .subscribe((valor) => (this.descuentos = valor))
  }

  private abrirDialogoConfirmacion(): MatDialogRef<
    DialogConfirmacionComponent
  > {
    return this.dialogo.open(DialogConfirmacionComponent, {
      disableClose: true,
      width: '25%',
    })
  }

  public eliminar(id: number): void {
    const dialogo = this.abrirDialogoConfirmacion()
    dialogo.afterClosed().subscribe(() => {
      if (dialogo.componentInstance.eliminar) {
        this.eliminarEnServicio(id)
      }
    })
  }

  private eliminarEnServicio(id: number) {
    this.servicioDescuento.eliminar(id).subscribe(() => {
      this.descuentos = this.descuentos.filter(
        (descuento: Descuento) => descuento.id !== id,
      )
      this.openMatSnackBar('Descuento eliminado con exíto.')
    })
  }

  public abrirDialogoCrearDescuento() {
    const dialogo = this.dialogo.open(CrearDescuentoComponent, {
      disableClose: true,
      width: '35%',
    })
    dialogo.afterClosed().subscribe(() => {
      this.consultar()
    })
  }

  private openMatSnackBar(mensaje: string) {
    this.ngZone.run(() => {
      this.matSnackBar.open(mensaje, 'INFORMACIÓN', {
        duration: 10 * 1000,
      })
    })
  }

  public contador(): string {
    return this.descuentos.length === 1
      ? this.descuentos.length + ' descuento'
      : this.descuentos.length + ' descuentos'
  }
}
