import { by, element } from "protractor";

export class CrearPedidoPage {
  public componenteMensajeServidor = element(by.id("idMensajeServidor"));
  public controlFecha = element(by.id("idFecha"));
  public controlCodigoProducto = element(by.id("idCodigoProducto"));
  public controlCodigoCliente = element(by.id("idCodigoCliente"));
  public controlDireccionDomicilio = element(by.id("idDireccionDomicilio"));
  public controlPlacaVehiculo = element(by.id("idPlacaVehiculo"));
  public controlPrecioTotalCompra = element(by.id("idPrecioTotalCompra"));
  public botonCrear = element(by.id("idBotonCrearPedido"));
}
