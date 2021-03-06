import { by, element } from "protractor";

export class ListarPedidoPage {
  public idPedidosCreados = element(by.id("idPedidosCreados"));
  public tabla = element(by.id("idTabla"));
  public botonEliminar = element(by.id("idBotonEliminar"));
  public componenteContadorItems = element(by.id("idContadorItems"));
}
