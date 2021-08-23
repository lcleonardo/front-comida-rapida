import { by, element } from "protractor";

export class CrearPedidoPage {
  public labelPedidoCreado = element(by.id("idLabelPedidoCreado"));
  private inputIdFecha = element(by.id("idFecha"));
  private inputCodigoProducto = element(by.id("idCodigoProducto"));
  private inputCodigoCliente = element(by.id("idCodigoCliente"));
  private inputDireccionDomicilio = element(by.id("idDireccionDomicilio"));
  private inputPlacaVehiculo = element(by.id("idPlacaVehiculo"));
  private inputPrecioTotalCompra = element(by.id("idPrecioTotalCompra"));
  private botonCreaPedido = element(by.id("idBotonCrearPedido"));
  private botonCancelarPedido = element(by.id("idBotonCancelarPedido"));

  async ingresarFecha(fecha) {
    await this.inputIdFecha.sendKeys(fecha);
  }

  async ingresarCodigoProducto(codigoProducto) {
    await this.inputCodigoProducto.sendKeys(codigoProducto);
  }

  async ingresarCodigoCliente(codigoCliente) {
    await this.inputCodigoCliente.sendKeys(codigoCliente);
  }

  async ingresarDireccionDomicilio(direccionDomicilio) {
    await this.inputDireccionDomicilio.sendKeys(direccionDomicilio);
  }

  async ingresarPlacaVehiculo(placaVehiculo) {
    await this.inputPlacaVehiculo.sendKeys(placaVehiculo);
  }

  async ingresarPrecioTotalCompra(precioTotalCompra) {
    await this.inputPrecioTotalCompra.sendKeys(precioTotalCompra);
  }

  async clickBotonCrearPedido() {
    await this.botonCreaPedido.click();
  }

  async clickBotonCancelarPedido() {
    await this.botonCancelarPedido.click();
  }
}
