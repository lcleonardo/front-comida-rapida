import { HttpClient, HttpHandler } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { Pedido } from "../model/pedido";

import { PedidoService } from "./pedido.service";

describe("PedidoService", () => {
  let servicio: PedidoService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [PedidoService, HttpService, HttpClient, HttpHandler],
    }).compileComponents();
    servicio = TestBed.inject(PedidoService);
  });

  afterEach(async () => {
    TestBed.resetTestingModule();
  });

  it("should be created", async () => {
    expect(servicio).toBeTruthy();
  });

  it("deberia crear un modelo de pedido correctamente", async () => {
    let pedido: Pedido = new Pedido(
      "2021-08-23",
      "1094",
      "0001",
      "Mi dirección",
      "VSD123",
      10000
    );
    expect(pedido.fecha).toEqual("2021-08-23");
    expect(pedido.codigoCliente).toEqual("1094");
    expect(pedido.codigoProducto).toEqual("0001");
    expect(pedido.direccionDomicilio).toEqual("Mi dirección");
    expect(pedido.placaVehiculo).toEqual("VSD123");
    expect(pedido.precioCompra).toEqual(10000);
  });

  it("deberia consultar pedidos", async () => {
    //Arrange
    let pedidos = null;
    //Act
    servicio.consultar().subscribe((respuesta) => (pedidos = respuesta));
    //Assert
    expect(pedidos).not.toBeNull;
  });

  it("deberia eliminar un pedido", async () => {
    let id = 1;
    servicio
      .eliminar(id)
      .subscribe((respuesta: boolean) => expect(respuesta).toBeTrue);
  });
});
