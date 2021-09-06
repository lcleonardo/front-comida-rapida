export class Pedido {
  fecha: string;
  codigoCliente: string;
  codigoProducto: string;
  direccionDomicilio: string;
  placaVehiculo: string;
  precioCompra: number;
  porcentajeDescuento: number;
  precioTotal: number;
  aplicaPromocion: number;

  constructor(
    fecha: string,
    codigoCliente: string,
    codigoProducto: string,
    direccionDomicilio: string,
    placaVehiculo: string,
    precioCompra: number
  ) {
    this.fecha = fecha;
    this.codigoCliente = codigoCliente;
    this.codigoProducto = codigoProducto;
    this.direccionDomicilio = direccionDomicilio;
    this.placaVehiculo = placaVehiculo;
    this.precioCompra = precioCompra;
  }

}
