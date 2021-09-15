import { HttpErrorResponse } from '@angular/common/http'
import { ErrorHandler, Injectable, Injector } from '@angular/core'
import { NotificacionService } from '@core/services/notificacion.service'
import { environment } from '../../../environments/environment'
import { HTTP_ERRORES_CODIGO } from './http-codigo-error'

@Injectable()
export class ManejadorError implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: string | Error): void {
    const mensajeError = this.mensajePorDefecto(error)
    this.imprimirErrorConsola(mensajeError)
    const notificacionService = this.injector.get(NotificacionService)
    notificacionService.mostrarError(mensajeError)
  }

  private mensajePorDefecto(error) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return HTTP_ERRORES_CODIGO.NO_HAY_INTERNET
      }
      if (
        error.hasOwnProperty('status') &&
        !error.error.hasOwnProperty('mensaje')
      ) {
        return this.obtenerErrorHttpCode(error.status)
      }
    }
    return error
  }

  private imprimirErrorConsola(mensaje): void {
    const respuesta = {
      fecha: new Date().toLocaleString(),
      path: window.location.href,
      mensaje,
    }
    if (!environment.production) {
      window.console.error('Error inesperado:\n', respuesta)
    }
  }

  public obtenerErrorHttpCode(httpCode: number): string {
    if (HTTP_ERRORES_CODIGO.hasOwnProperty(httpCode)) {
      return HTTP_ERRORES_CODIGO.PETICION_FALLIDA
    }
    return HTTP_ERRORES_CODIGO[httpCode]
  }
}
