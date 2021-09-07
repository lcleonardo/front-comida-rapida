import { by, element } from "protractor";

export class ListarDescuentoPage {
  public captionPedidosCreados = element(by.id("idDescuentosCreados"));
  public tabla = element(by.id("idTabla"));
  public botonEliminar = element(by.id("idBotonEliminar"));
  public componenteContadorItems = element(by.id("idContadorItems"));
}
