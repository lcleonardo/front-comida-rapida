import { DatePipe } from '@angular/common'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { Descuento } from '@descuento/shared/model/descuento'
import { SnackBarService } from '@shared/servicios/snackbar.service'
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
    protected snackBarService: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.construirFormulario()
    this.focus()
  }

  public focus(): void {
    setTimeout(() => {
      this.matInputFecha.nativeElement.focus()
      this.matInputFecha.nativeElement.setSelectionRange(0, 10)
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
        this.snackBarService.abrir('Descuento creado con exíto.')
      }
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
        porcentaje: new FormControl('', [
          Validators.required,
          ValidadorComun.menorOIgualACero,
        ]),
      },
      { updateOn: 'blur' },
    )
  }
}
