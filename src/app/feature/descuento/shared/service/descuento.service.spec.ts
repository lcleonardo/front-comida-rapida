import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DescuentoService } from "./descuento.service";
import { HttpService } from "@core/services/http.service";
import { of } from "rxjs";
import { Descuento } from "../model/descuento";

fdescribe("Test servicio descuento", () => {
  let descuentoService: DescuentoService;
  let httpServiceSpy;
  beforeEach(async () => {
    httpServiceSpy = jasmine.createSpyObj("HttpService", [
      "optsName",
      "doGet",
      "doPost",
      "doDelete",
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DescuentoService,
        { provide: HttpService, useValue: httpServiceSpy },
      ],
    }).compileComponents();
    descuentoService = TestBed.inject(DescuentoService);
  });

  it("should be initialized", async () => {
    expect(descuentoService).toBeTruthy;
  });

  it("deberia consulatr pedidos", async () => {
    //Arrange
    let descuentos: Descuento[] = [];
    let descuento: Descuento = new Descuento("2021,09-01", 10);
    //Act
    httpServiceSpy.doGet.and.returnValue(of([descuento]));
    descuentoService.consultar().subscribe((res) => (descuentos = res));
    //Assert
    expect(descuentos.length).toBe(1);
    expect(descuentos[0].fecha).toEqual("2021,09-01");
    expect(descuentos[0].porcentaje).toEqual(10);
  });
});
