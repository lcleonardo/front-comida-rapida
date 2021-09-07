import { HttpClient, HttpHandler } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { HttpService, Options } from "@core/services/http.service";
import { Descuento } from "../model/descuento";

import { DescuentoService } from "./descuento.service";

describe("DescuentoService", () => {
  let servicio: DescuentoService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [DescuentoService, HttpService, HttpClient, HttpHandler],
    });
    servicio = TestBed.inject(DescuentoService);
  });

  it("should be created", async () => {
    expect(servicio).toBeTruthy();
  });

  it("deberia crear un modelo de descuento correctamente", async () => {
    let descuento: Descuento = new Descuento("2021-08-23", 5.0);
    expect(descuento.fecha).toEqual("2021-08-23");
    expect(descuento.porcentaje).toEqual(5.0);
  });

  it("deberia consultar descuentos", async () => {
    //Arrange
    let descuentos: Descuento[] = null;
    //Act
    servicio.consultar().subscribe((respuesta) => (descuentos = respuesta));
    //Assert
    expect(descuentos).not.toBeNull;
  });

  it("deberia guardar un descuento correctamente", async () => {
    //Arrange
    let descuento: Descuento = new Descuento("2021-08-23", 5.0);
    //Act Assert
    servicio
      .guardar(descuento)
      .subscribe((respuesta: Options) => expect(respuesta).toContain("valor"));
  });

  it("deberia eliminar un descuento", async () => {
    //Arrange
    let id = 1;
    //Act Assert
    servicio
      .eliminar(id)
      .subscribe((respuesta: boolean) => expect(respuesta).toBeTrue);
  });
});
