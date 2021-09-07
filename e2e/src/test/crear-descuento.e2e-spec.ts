import { AppPage } from "../app.po";
import { CrearDescuentoPage } from "../page/descuento/crear-descuento.po";

describe("workspace-project Descuento", () => {
  let appPage: AppPage;
  let crearDescuentoPage: CrearDescuentoPage;

  beforeEach(async () => {
    appPage = new AppPage();
    crearDescuentoPage = new CrearDescuentoPage();
  });

  it("Deberia mostrar pagina de crear descuentos", async () => {
    await appPage.navigateTo("descuento/crear");
    expect(crearDescuentoPage.botonCrear).toBeTruthy;
  });

  it("Deberia dar click en el boton de crear un descuento", async () => {
    await appPage.navigateTo("descuento/crear");
    let botonCrear = crearDescuentoPage.botonCrear;
    expect(botonCrear.click()).toBeTruthy;
  });
});
