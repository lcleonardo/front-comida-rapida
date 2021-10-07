import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogRef } from '@angular/material/dialog'
import { DescuentoService } from '@descuento/shared/service/descuento.service'
import { SnackBarService } from '@shared/servicios/snackbar.service'
import { CrearDescuentoComponent } from './crear-descuento.component'

fdescribe('Test CrearDescuentoComponent', () => {
  let fixture: ComponentFixture<CrearDescuentoComponent>
  let descuentoComponent: CrearDescuentoComponent
  let descuentoServiceSpy: DescuentoService
  let matDialogRef: MatDialogRef<CrearDescuentoComponent>
  let snackBarService: SnackBarService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearDescuentoComponent],
      providers: [
        { provide: DescuentoService, useValue: descuentoServiceSpy },
        { provide: MatDialogRef, useValue: matDialogRef },
        { provide: SnackBarService, useValue: snackBarService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
    fixture = TestBed.createComponent(CrearDescuentoComponent)
    descuentoComponent = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be initialized', async () => {
    expect(descuentoComponent).toBeTruthy
  })

  // it('deberia crear un descuento', async () => {})
})
