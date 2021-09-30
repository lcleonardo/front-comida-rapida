import { DatePipe } from '@angular/common'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DescuentoService } from '@descuento/shared/service/descuento.service'
import { CrearDescuentoComponent } from './crear-descuento.component'

fdescribe('Test CrearDescuentoComponent', () => {
  let fixture: ComponentFixture<CrearDescuentoComponent>
  let descuento: CrearDescuentoComponent
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
    descuento = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be initialized', async () => {
    expect(descuento).toBeTruthy
  })

  // it('deberia retornar un formulario valido', async () => {
  //   let fecha = descuento.formulario.get('fecha')
  //   fecha.setValue(new Date().toISOString())
  //   let porcentaje = descuento.formulario.get('porcentaje')
  //   porcentaje.setValue(10)
  //   expect(descuento.formulario.valid).toBe(true)
  // })
})
