export class Descuento {
  id: number = 0
  fecha: string
  porcentaje: number

  constructor(fecha: string, porcentaje: number) {
    this.fecha = fecha
    this.porcentaje = porcentaje
  }
}
