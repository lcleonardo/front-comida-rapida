import { browser } from "protractor";
import { AppPage } from "../app.po";
import { CrearPedidoPage } from "../page/pedido/crear-pedido.po";
import { ListarPedidoPage } from "../page/pedido/listar-pedido.po";

describe("workspace-project Pedido", () => {
  let appPage: AppPage;
  let crearPedidoPage: CrearPedidoPage;
  let listarPedidoPage: ListarPedidoPage;

  beforeEach(async () => {
    appPage = new AppPage();
    crearPedidoPage = new CrearPedidoPage();
    listarPedidoPage = new ListarPedidoPage();
  });

  afterEach(() => {
    browser.driver.sleep(3000);
  });
 

  it("Deberia crear un pedido", async () => {
    const FECHA = "22-08-2021";
    const CODIGO_PRODUCTO = "0001";
    const CODIGO_CLIENTE = "1094911234";
    const DIRECCION_DOMICILIO = "BIS Avenida Bolivar";
    const PLACA_VEHICULO = "VDH124";
    const PRECIO_TOTAL_COMPRA = "20000";

    await appPage.navigateTo("/pedido/crear");
    await crearPedidoPage.ingresarFecha(FECHA);
    await crearPedidoPage.ingresarCodigoProducto(CODIGO_PRODUCTO);
    await crearPedidoPage.ingresarCodigoCliente(CODIGO_CLIENTE);
    await crearPedidoPage.ingresarDireccionDomicilio(DIRECCION_DOMICILIO);
    await crearPedidoPage.ingresarPlacaVehiculo(PLACA_VEHICULO);
    await crearPedidoPage.ingresarPrecioTotalCompra(PRECIO_TOTAL_COMPRA);

    await crearPedidoPage.clickBotonCrearPedido();
    
    expect(await crearPedidoPage.labelPedidoCreado.getText()).toEqual("Pedido creado con éxito.");
    
  });

  it("Deberia listar pedidos", async () => {
    await appPage.navigateTo("/pedido/listar");
    expect(await listarPedidoPage.captionPedidosCreados.getText()).toEqual("Pedidos creados");
  });
});
