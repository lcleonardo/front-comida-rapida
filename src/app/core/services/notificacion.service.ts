import { Injectable, NgZone } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class NotificacionService {
  constructor(protected matSnackBar: MatSnackBar, protected ngZone: NgZone) {}

  public mostrarError(mensaje: Object) {
    let nombreExcepcion: string = mensaje['error']['nombreExcepcion']
    if (
      nombreExcepcion.includes('ExcepcionAccionNoPermitida') ||
      nombreExcepcion.includes('ExcepcionDuplicidad') ||
      nombreExcepcion.includes('ExcepcionLongitudValor') ||
      nombreExcepcion.includes('ExcepcionSinDatos') ||
      nombreExcepcion.includes('ExcepcionValorInvalido') ||
      nombreExcepcion.includes('ExcepcionValorObligatorio')
    ) {
      this.ngZone.run(() => {
        this.matSnackBar.open(mensaje['error']['mensaje'], 'Cerrar')
      })
    }
  }

  public mostrarMensaje(mensaje: string) {
    this.ngZone.run(() => {
      this.matSnackBar.open(mensaje, 'Cerrar')
    })
  }
}
