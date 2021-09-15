import { NgModule, ErrorHandler } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SecurityGuard } from './guard/security.guard'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from './interceptor/token-interceptor'
import { AuthInterceptor } from './interceptor/auth-interceptor'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HttpService } from './services/http.service'
import { ManejadorError } from './interceptor/manejador-error'
import { RouterModule } from '@angular/router'
import { MaterialModule } from '@shared/material.module'
import { NotificacionService } from './services/notificacion.service'

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ToolbarComponent, NavbarComponent],
  providers: [
    NotificacionService,
    HttpService,
    SecurityGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ManejadorError },
  ],
})
export class CoreModule {}
