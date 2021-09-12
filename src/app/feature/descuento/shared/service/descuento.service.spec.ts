import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DescuentoService } from "./descuento.service";
import { HttpService } from "@core/services/http.service";

fdescribe("Test servicio descuento", () => {
  let descuentoService;
  let httpServiceSpy;
  beforeEach(async () => {
    httpServiceSpy = jasmine.createSpyObj("HttpService", [
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

  it("should be initialized", () => {
    expect(descuentoService).toBeTruthy;
  });
});
