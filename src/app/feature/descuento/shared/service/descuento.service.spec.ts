import { TestBed } from "@angular/core/testing";
import { DescuentoModule } from "@descuento/descuento.module";
import { Descuento } from "../model/descuento";

import { DescuentoService } from "./descuento.service";

describe("DescuentoService", () => {
  let servicio: DescuentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DescuentoModule],
    });
    servicio = TestBed.inject(DescuentoService);
  });

  it("should be created", () => {
    expect(servicio).toBeTruthy();
  });

  it("deberia crear un modelo de descuento correctamente", async () => {
    let descuento: Descuento = new Descuento("2021-08-23", 5.0);
    expect(descuento.fecha).toEqual("2021-08-23");
    expect(descuento.porcentaje).toEqual(5.0);
  });

  it("deberia consultar descuentos", async () => {
    servicio.consultar().subscribe((respuesta) => expect(respuesta).toBeTruthy);
  });

  it("deberia guardar un descuento correctamente", async () => {
    let descuento: Descuento = new Descuento("2021-08-23", 5.0);
    servicio
      .guardar(descuento)
      .subscribe((respuesta) => expect(respuesta).toBeTruthy);
  });

  it("deberia eliminar un descuentos", async () => {
    let id = 1;
    servicio
      .eliminar(id)
      .subscribe((respuesta) => expect(respuesta).toBeTruthy);
  });
});
