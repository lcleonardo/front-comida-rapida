import { by, element } from "protractor";

export class CrearDescuentoPage {
  public componenteMensajeServidor = element(by.id("idMensajeServidor"));
  public botonCrear = element(by.id("idBotonCrearDescuento"));
}
