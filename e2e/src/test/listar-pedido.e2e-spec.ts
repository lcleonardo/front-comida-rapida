import { AppPage } from "../app.po";
import { ListarPedidoPage } from "../page/pedido/listar-pedido.po";

describe("workspace-project Pedido", () => {
  let appPage: AppPage;
  let listarPedidoPage: ListarPedidoPage;

  beforeEach(async () => {
    appPage = new AppPage();
    listarPedidoPage = new ListarPedidoPage();
  });

  it("Deberia mostrar pagina de listar pedidos", async () => {
    await appPage.navigateTo("pedido/listar");
    expect(listarPedidoPage.tabla).toBeTruthy;
  });

  it("Deberia dar click en el boton eliminar", async () => {
    await appPage.navigateTo("pedido/listar");
    let boton = listarPedidoPage.botonEliminar;
    expect(boton.click).toBeTruthy;
  });

  it("Deberia mostrar el componente de contador de items", async () => {
    await appPage.navigateTo("descuento/listar");
    let componente = listarPedidoPage.componenteContadorItems;
    expect(componente).toBeTrue;
  });
});
