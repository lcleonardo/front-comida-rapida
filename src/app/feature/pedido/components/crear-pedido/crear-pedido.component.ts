import { Component, NgZone, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PedidoService } from '../../shared/service/pedido.service'
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router'
import { ValidadorFecha } from '@shared/validador/validador-fecha'
import { ValidadorComun } from '@shared/validador/validador-comun'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css'],
})
export class CrearPedidoComponent implements OnInit {
  formulario: FormGroup
  horizontalPosition: MatSnackBarHorizontalPosition = 'start'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'

  constructor(
    protected servicio: PedidoService,
    protected formatoFecha: DatePipe,
    protected enrutador: Router,
    protected matSnackBar: MatSnackBar,
    protected ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    this.construirFormulario()
  }

  guardar(): void {
    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched()
      return
    }
    this.servicio.guardar(this.formulario.value).subscribe((respuesta) => {
      if (respuesta) {
        this.openMatSnackBar('Pedido creado con exíto.')
      }
    })
  }

  private construirFormulario(): void {
    this.formulario = new FormGroup(
      {
        fecha: new FormControl(
          this.formatoFecha.transform(Date.now(), 'yyyy-MM-dd'),
          [Validators.required, ValidadorFecha.fechaMenorAFechaActual],
        ),
        codigoCliente: new FormControl('', [
          Validators.required,
          Validators.maxLength(250),
        ]),
        codigoProducto: new FormControl('', [
          Validators.required,
          Validators.maxLength(250),
        ]),
        direccionDomicilio: new FormControl('', [
          Validators.required,
          Validators.maxLength(250),
        ]),
        placaVehiculo: new FormControl('', [
          Validators.required,
          ValidadorComun.validarPlacaVehiculo,
          Validators.maxLength(25),
        ]),
        precioCompra: new FormControl('', [
          Validators.required,
          ValidadorComun.menorOIgualACero,
        ]),
      },
      { updateOn: 'blur' },
    )
  }

  openMatSnackBar(mensaje: string) {
    this.ngZone.run(() => {
      this.matSnackBar.open(mensaje, 'INFORMACIÓN', {
        duration: 10 * 1000,
      })
    })
  }
}
