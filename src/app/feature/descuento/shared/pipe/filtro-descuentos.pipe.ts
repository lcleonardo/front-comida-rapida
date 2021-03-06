import { Pipe, PipeTransform } from '@angular/core'
import { Descuento } from '../model/descuento'

@Pipe({
  name: 'filtroDescuentos',
})
export class FiltroDescuentosPipe implements PipeTransform {
  transform(descuentos: Descuento[], valor: string): Descuento[] {
    if (valor) {
      return descuentos.filter((descuento) =>
        (descuento.fecha + descuento.porcentaje)
          .toLowerCase()
          .includes(valor.toLowerCase()),
      )
    }
    return descuentos
  }
}
