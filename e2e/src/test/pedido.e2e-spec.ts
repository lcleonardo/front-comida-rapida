import { AppPage } from "../app.po";
import { CrearPedidoPage } from "../page/pedido/crear-pedido.po";
import { ListarPedidoPage } from "../page/pedido/listar-pedido.po";

const FECHA = "23-08-2021";
const CODIGO_PRODUCTO = "0001";
const CODIGO_CLIENTE = "1094911234";
const DIRECCION_DOMICILIO = "BIS Avenida Bolivar";
const PLACA_VEHICULO = "VDH124";
const PRECIO_TOTAL_COMPRA = "20000";

describe("workspace-project Pedido", () => {
  let appPage: AppPage;
  let crearPedidoPage: CrearPedidoPage;
  let listarPedidoPage: ListarPedidoPage;

  beforeEach(async () => {
    appPage = new AppPage();
    crearPedidoPage = new CrearPedidoPage();
    listarPedidoPage = new ListarPedidoPage();
  });

  it("Deberia mostrar etiqueta pedido creado", async () => {
    await appPage.navigateTo("/pedido/crear");
    await crearPedidoPage.ingresarFecha(FECHA);
    await crearPedidoPage.ingresarCodigoProducto(CODIGO_PRODUCTO);
    await crearPedidoPage.ingresarCodigoCliente(CODIGO_CLIENTE);
    await crearPedidoPage.ingresarDireccionDomicilio(DIRECCION_DOMICILIO);
    await crearPedidoPage.ingresarPlacaVehiculo(PLACA_VEHICULO);
    await crearPedidoPage.ingresarPrecioTotalCompra(PRECIO_TOTAL_COMPRA);

    await crearPedidoPage.crearPedido();

    expect(crearPedidoPage.divPedidoCreado.isPresent);
  });

  it("Deberia limpiar todos los controles del formulario", async () => {
    await appPage.navigateTo("/pedido/crear");

    await crearPedidoPage.ingresarFecha(FECHA);
    await crearPedidoPage.ingresarCodigoProducto(CODIGO_PRODUCTO);
    await crearPedidoPage.ingresarCodigoCliente(CODIGO_CLIENTE);
    await crearPedidoPage.ingresarDireccionDomicilio(DIRECCION_DOMICILIO);
    await crearPedidoPage.ingresarPlacaVehiculo(PLACA_VEHICULO);
    await crearPedidoPage.ingresarPrecioTotalCompra(PRECIO_TOTAL_COMPRA);

    await crearPedidoPage.cancelarPedido();
    expect(crearPedidoPage.todosLosControlesVacios).toBeTrue;
  });

  it("Deberia mostrar un número de pedidos creados", async () => {
    await appPage.navigateTo("/pedido/listar");
    let texto = await listarPedidoPage.captionPedidosCreados.getText();
    expect(texto).not.toBeNull;
  });
});
