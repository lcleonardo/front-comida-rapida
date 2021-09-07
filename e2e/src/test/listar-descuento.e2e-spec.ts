import { AppPage } from "../app.po";
import { ListarDescuentoPage } from "../page/descuento/listar-descuento.po";

describe("workspace-project Descuento", () => {
  let appPage: AppPage;
  let listarPedidoPage: ListarDescuentoPage;

  beforeEach(async () => {
    appPage = new AppPage();
    listarPedidoPage = new ListarDescuentoPage();
  });

  it("Deberia mostrar pagina de listar descuentos", async () => {
    await appPage.navigateTo("descuento/listar");
    expect(listarPedidoPage.tabla).toBeTruthy;
  });

  it("Deberia dar click en el boton eliminar", async () => {
    await appPage.navigateTo("descuento/listar");
    let boton = listarPedidoPage.botonEliminar;
    expect(boton.click).toBeTruthy;
  });

  it("Deberia mostrar el componente de contador de items", async () => {
    await appPage.navigateTo("descuento/listar");
    let componente = listarPedidoPage.componenteContadorItems;
    expect(componente).toBeTrue;
  });

});
