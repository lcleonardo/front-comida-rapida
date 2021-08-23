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
    let pedido: Pedido = {
      id: 0,
      fecha: "2021-08-22",
      codigoCliente: "109491183",
      codigoProducto: "1000",
      direccionDomicilio: "Calle 123",
      placaVehiculo: "VHG234",
      precioDomicilio: 0,
      precioTotalCompra: 0,
    };
    servicio
      .guardar(pedido)
      .subscribe((respuesta) => expect(respuesta).not.toBeNull());
  });

  it("deberia eliminar un pedido", async () => {
    let idPedido = 1;
    expect(
      servicio
        .eliminar(idPedido)
        .subscribe((respuesta) => expect(respuesta).toBeTrue())
    );
  });
});
