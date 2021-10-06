import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class SnackBarService {
  constructor(protected matSnackBar: MatSnackBar) {}

  public abrir(mensaje: string, duracionEnSegundos: number = 6) {
    this.matSnackBar.open(mensaje, 'INFORMACIÓN', {
      duration: duracionEnSegundos * 1000,
    })
  }
}
