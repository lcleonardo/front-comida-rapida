import { DatePipe } from '@angular/common'
import { TestBed } from '@angular/core/testing'
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DescuentoService } from '@descuento/shared/service/descuento.service'
import { CrearDescuentoComponent } from './crear-descuento.component'

fdescribe('Test crear descuento CrearDescuentoComponent', () => {
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
    componente = TestBed.inject(CrearDescuentoComponent)
  })

  it('should be initialized', async () => {
    expect(componente).toBeTruthy
  })
})
