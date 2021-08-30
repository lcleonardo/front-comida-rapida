import { TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { Pedido } from "../model/pedido";

import { PedidoService } from "./pedido.service";

describe("PedidoService", () => {
  let servicio: PedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
    servicio = TestBed.inject(PedidoService);
  });

  it("should be created", async () => {
    expect(servicio).toBeTruthy();
  });

  it("deberia consultar pedidos", async () => {
    servicio
      .consultar()
      .subscribe((respuesta) => expect(respuesta.values).not.toBeNull());
  });

  it("deberia guardar un pedido", async () => {
    let pedido = new Pedido(
      "2021-08-21",
      "1094",
      "1000",
      "Vereda san juan",
      "VKH234",
      2000
    );
    servicio
      .guardar(pedido)
      .subscribe((respuesta) => expect(respuesta).not.toBeNull());
  });

  it("deberia eliminar un pedido", async () => {
    let id = 1;
    expect(servicio.eliminar(id)).toBeTrue;
  });
});
