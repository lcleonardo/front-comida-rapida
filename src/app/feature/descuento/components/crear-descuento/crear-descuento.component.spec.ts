import { DatePipe } from '@angular/common'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DescuentoService } from '@descuento/shared/service/descuento.service'
import { CrearDescuentoComponent } from './crear-descuento.component'

fdescribe('Test crear descuento CrearDescuentoComponent', () => {
  let fixture: ComponentFixture<CrearDescuentoComponent>
  let componente: CrearDescuentoComponent
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
    componente = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be initialized', async () => {
    expect(componente).toBeTruthy
  })

  it('deberia retornar un formulario valido', async () => {
    let fecha = componente.formulario.get('fecha')
    fecha.setValue(new Date().toISOString())
    let porcentaje = componente.formulario.get('porcentaje')
    porcentaje.setValue(10)
    expect(componente.formulario.valid).toBe(true)
  })

  it('deberia retornar un formulario invalido, porque la fecha no puede ser menor a la fecha actual', async () => {
    let fecha = componente.formulario.get('fecha')
    await fecha.setValue('2021-09-15')
    let porcentaje = componente.formulario.get('porcentaje')
    await porcentaje.setValue(10)
    componente.formulario.markAllAsTouched()
    expect(componente.formulario.invalid).toBe(true)
  })
})
