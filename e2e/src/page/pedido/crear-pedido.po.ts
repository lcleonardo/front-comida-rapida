import { by, element } from "protractor";

export class CrearPedidoPage {
  public divPedidoCreado = element(by.id("idDivPedidoCreado"));
  public controlFecha = element(by.id("idFecha"));
  public controlCodigoProducto = element(by.id("idCodigoProducto"));
  public controlCodigoCliente = element(by.id("idCodigoCliente"));
  public controlDireccionDomicilio = element(by.id("idDireccionDomicilio"));
  public controlPlacaVehiculo = element(by.id("idPlacaVehiculo"));
  public controlPrecioTotalCompra = element(by.id("idPrecioTotalCompra"));
  public controlCreaPedido = element(by.id("idBotonCrearPedido"));
  public botonCancelarPedido = element(by.id("idBotonCancelarPedido"));

  async todosLosControlesVacios(): Promise<boolean> {
    let fecha = await this.controlFecha.getText();
    let codigoProducto = await this.controlCodigoProducto.getText();
    let codigoCliente = await this.controlCodigoCliente.getText();
    let direccionDomicilio = await this.controlDireccionDomicilio.getText();
    let placaVehiculo = await this.controlPlacaVehiculo.getText();
    let precioTotalCompra = await this.controlPrecioTotalCompra.getText();
    return (
      fecha.length === 0 &&
      codigoProducto.length === 0 &&
      codigoCliente.length === 0 &&
      direccionDomicilio.length === 0 &&
      placaVehiculo.length === 0 &&
      precioTotalCompra.length === 0
    );
  }

  async ingresarFecha(fecha) {
    await this.controlFecha.sendKeys(fecha);
  }

  async ingresarCodigoProducto(codigoProducto) {
    await this.controlCodigoProducto.sendKeys(codigoProducto);
  }

  async ingresarCodigoCliente(codigoCliente) {
    await this.controlCodigoCliente.sendKeys(codigoCliente);
  }

  async ingresarDireccionDomicilio(direccionDomicilio) {
    await this.controlDireccionDomicilio.sendKeys(direccionDomicilio);
  }

  async ingresarPlacaVehiculo(placaVehiculo) {
    await this.controlPlacaVehiculo.sendKeys(placaVehiculo);
  }

  async ingresarPrecioTotalCompra(precioTotalCompra) {
    await this.controlPrecioTotalCompra.sendKeys(precioTotalCompra);
  }

  async crearPedido() {
    await this.controlCreaPedido.click();
  }

  async cancelarPedido() {
    await this.botonCancelarPedido.click();
  }
}
