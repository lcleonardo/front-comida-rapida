import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DescuentoService } from './descuento.service'
import { HttpService } from '@core/services/http.service'
import { of } from 'rxjs'
import { Descuento } from '../model/descuento'

fdescribe('Test servicio descuento DescuentoService', () => {
  let descuentoService: DescuentoService
  let httpServiceSpy
  beforeEach(async () => {
    httpServiceSpy = jasmine.createSpyObj('HttpService', [
      'optsName',
      'createDefaultOptions',
      'doGet',
      'doPost',
      'optsName',
      'doDelete',
    ])
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DescuentoService,
        { provide: HttpService, useValue: httpServiceSpy },
      ],
    }).compileComponents()
    descuentoService = TestBed.inject(DescuentoService)
  })

  it('should be initialized', async () => {
    expect(descuentoService).toBeTruthy
  })

  it('deberia consultar descuentos', async () => {
    //Arrange
    let descuentos: Descuento[] = []
    let descuento: Descuento = new Descuento('2021-09-01', 10)
    //Act
    httpServiceSpy.doGet.and.returnValue(of([descuento]))
    descuentoService.consultar().subscribe((res) => (descuentos = res))
    //Assert
    expect(descuentos.length).toBe(1)
    expect(descuentos[0].fecha).toEqual('2021-09-01')
    expect(descuentos[0].porcentaje).toEqual(10)
  })

  it('deberia guardar un descuento', async () => {
    //Arrange
    let respuesta: number
    let descuento: Descuento = new Descuento('2021-09-01', 10)
    //Act
    httpServiceSpy.doPost.and.returnValue(of([new Object('1')]))
    descuentoService.guardar(descuento).subscribe((res) => (respuesta = res))
    //Assert
    expect(respuesta.toString()).toEqual('1')
    expect(respuesta).not.toBeNull
  })

  it('deberia eliminar un descuento', async () => {
    let id: number = 1
    descuentoService.eliminar(id)
    expect(httpServiceSpy.doDelete.calls.count()).toBe(1)
  })
})
