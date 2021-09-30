import { DatePipe } from '@angular/common'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DescuentoService } from '@descuento/shared/service/descuento.service'
import { CrearDescuentoComponent } from './crear-descuento.component'

fdescribe('Test CrearDescuentoComponent', () => {
  let fixture: ComponentFixture<CrearDescuentoComponent>
  let descuentoComponent: CrearDescuentoComponent
  let descuentoServiceSpy: DescuentoService
  let datePipeSpy: DatePipe
  let matDialogSpy: MatDialogRef<CrearDescuentoComponent>
  let matSnackBarSpy: MatSnackBar

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        CrearDescuentoComponent,
        { provide: DescuentoService, useValue: descuentoServiceSpy },
        { provide: DatePipe, useValue: datePipeSpy },
        { provide: MatDialogRef, useValue: matDialogSpy },
        { provide: MatSnackBar, useValue: matSnackBarSpy },
      ],
    }).compileComponents()
    fixture = TestBed.createComponent(CrearDescuentoComponent)
    descuentoComponent = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be initialized', async () => {
    expect(descuentoComponent).toBeTruthy
  })

  it('obtener objeto descuento', async () => {
    const datepipe: DatePipe = new DatePipe('en-US')
    const fecha: string = new Date().toISOString()

    let inputFecha = descuentoComponent.formulario.get('fecha')
    inputFecha.setValue(fecha)

    let inputPorcentaje = descuentoComponent.formulario.get('porcentaje')
    inputPorcentaje.setValue(10)

    descuentoComponent['crearDescuento']()

    expect(descuentoComponent.descuento.fecha).toEqual(
      datepipe.transform(fecha, 'yyyy-MM-dd'),
    )
    expect(descuentoComponent.descuento.porcentaje).toEqual(10)
  })
})
