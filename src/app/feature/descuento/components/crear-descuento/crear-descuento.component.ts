import { DatePipe } from '@angular/common'
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Descuento } from '@descuento/shared/model/descuento'
import { ValidadorComun } from '@shared/validador/validador-comun'
import { ValidadorFecha } from '@shared/validador/validador-fecha'
import { DescuentoService } from '../../shared/service/descuento.service'

@Component({
  selector: 'app-crear-descuento',
  templateUrl: './crear-descuento.component.html',
  styleUrls: ['./crear-descuento.component.css'],
})
export class CrearDescuentoComponent implements OnInit {
  formulario: FormGroup
  @ViewChild('matInputFecha', { read: ElementRef }) matInputFecha: ElementRef

  constructor(
    protected servicio: DescuentoService,
    public dialogo: MatDialogRef<CrearDescuentoComponent>,
    protected matSnackBar: MatSnackBar,
    protected ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    this.construirFormulario()
    this.focusInputFecha()
  }

  public focusInputFecha(): void {
    setTimeout(() => {
      this.matInputFecha.nativeElement.focus()
      this.matInputFecha.nativeElement.setSelectionRange(0, 1)
    }, 250)
  }

  public guardar(): void {
    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched()
      return
    }
    this.servicio.guardar(this.obtenerDescuento()).subscribe((respuesta) => {
      if (respuesta) {
        this.dialogo.close()
        this.openMatSnackBar('Descuento creado con exíto.')
      }
    })
  }

  private openMatSnackBar(mensaje: string) {
    this.ngZone.run(() => {
      this.matSnackBar.open(mensaje, 'INFORMACIÓN', {
        duration: 6 * 1000,
      })
    })
  }

  private obtenerDescuento(): Descuento {
    const datepipe: DatePipe = new DatePipe('en-US')
    const fecha = datepipe.transform(
      this.formulario.get('fecha').value,
      'yyyy-MM-dd',
    )
    const porcentaje: number = this.formulario.get('porcentaje').value
    return new Descuento(fecha, porcentaje)
  }

  private construirFormulario(): void {
    this.formulario = new FormGroup(
      {
        fecha: new FormControl(new Date().toISOString(), [
          Validators.required,
          ValidadorFecha.fechaMenorAFechaActual,
        ]),
        porcentaje: new FormControl('0', [
          Validators.required,
          ValidadorComun.menorOIgualACero,
        ]),
      },
      { updateOn: 'blur' },
    )
  }
}
