import { TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { Descuento } from "../model/descuento";

import { DescuentoService } from "./descuento.service";

describe("DescuentoService", () => {
  let servicio: DescuentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    servicio = TestBed.inject(DescuentoService);
  });

  it("should be created", () => {
    expect(servicio).toBeTruthy();
  });

  it("deberia consultar descuentos", async () => {
    servicio
      .consultar()
      .subscribe((respuesta) => expect(respuesta.values).not.toBeNull());
  });

  it("deberia crear un modelo de descuento correctamente", async () => {
    let descuento: Descuento = new Descuento("2021-08-23", 5.0);
    expect(descuento.fecha).toEqual("2021-08-23");
    expect(descuento.porcentaje).toEqual(5.0);
  });

  it("deberia guardar un descuento correctamente", async () => {
    let descuento: Descuento = new Descuento("2021-08-23", 5.0);
    servicio
      .guardar(descuento)
      .subscribe((respuesta) => expect(respuesta).not.toBeNull());
  });
});
