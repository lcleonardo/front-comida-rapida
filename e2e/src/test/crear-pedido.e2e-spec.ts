import { AppPage } from "../app.po";
import { CrearPedidoPage } from "../page/pedido/crear-pedido.po";

describe("workspace-project Pedido", () => {
  let appPage: AppPage;
  let crearPedidoPage: CrearPedidoPage;

  beforeEach(async () => {
    appPage = new AppPage();
    crearPedidoPage = new CrearPedidoPage();
  });

  it("Deberia mostrar pagina de crear pedidos", async () => {
    await appPage.navigateTo("pedido/crear");
    expect(crearPedidoPage.controlFecha).toBeTruthy;
  });

  it("Deberia dar click en el boton de crear un pedido", async () => {
    await appPage.navigateTo("pedido/crear");
    let botonCrear = crearPedidoPage.botonCrear;
    expect(botonCrear.click()).toBeTruthy;
  });

});
