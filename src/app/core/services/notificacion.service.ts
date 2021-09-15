import { Injectable, NgZone } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class NotificacionService {
  constructor(protected matSnackBar: MatSnackBar, protected ngZone: NgZone) {}

  public mostrar(mensaje: Object) {
    let nombreExcepcion: string = mensaje['error']['nombreExcepcion']
    if (
      nombreExcepcion.includes('ExcepcionAccionNoPermitida') ||
      nombreExcepcion.includes('ExcepcionDuplicidad')
    ) {
      this.ngZone.run(() => {
        this.matSnackBar.open(mensaje['error']['mensaje'], 'Cerrar')
      })
    }
  }
}
