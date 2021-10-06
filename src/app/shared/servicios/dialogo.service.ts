import { ComponentType } from '@angular/cdk/portal'
import { Injectable, NgZone } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class DialogoService {
  constructor(
    protected dialogo: MatDialog,
    protected matSnackBar: MatSnackBar,
    protected ngZone: NgZone,
  ) {}

  public abrir(
    componente: ComponentType<any>,
    disableClose: boolean = true,
    width: number = 25,
  ): MatDialogRef<any, any> {
    return this.dialogo.open(componente, {
      disableClose: disableClose,
      width: `${width}`,
    })
  }
}