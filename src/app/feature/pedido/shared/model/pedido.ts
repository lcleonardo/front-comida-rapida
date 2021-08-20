export class Pedido {
  id: number;
  fecha: string;
  codigoCliente: string;
  codigoProducto: string;
  direccionDomicilio: string;
  placaVehivulo: string;
  precioDomicilo: number;
  precioTotalCompra: number;

  constructor(
    id: number,
    fecha: string,
    codigoCliente: string,
    codigoProducto: string,
    direccionDomicilio: string,
    placaVehivulo: string,
    precioDomicilio: number,
    precioTotalCompra: number
  ) {
    this.id = id;
    this.fecha = fecha;
    this.codigoCliente = codigoCliente;
    this.codigoProducto = codigoProducto;
    this.direccionDomicilio = direccionDomicilio;
    this.placaVehivulo = placaVehivulo;
    this.precioDomicilo = precioDomicilio;
    this.precioTotalCompra = precioTotalCompra;
  }
}
