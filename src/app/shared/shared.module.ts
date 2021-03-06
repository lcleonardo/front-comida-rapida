import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MensajeErrorCamposDirective } from './directivas/error-campos/directiva/mensaje-error-campos.directive'
import { MensajeErrorCamposSubmitDirective } from './directivas/error-campos/directiva/mensaje-error-campos-submit.directive'
import { MensajeErrorCamposContenedorDirective } from './directivas/error-campos/directiva/mensaje-error-campos-contenedor.directive'
import { ErrorCamposPlantillaComponent } from './directivas/error-campos/componente/error-campos-plantilla.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { TrackByPipe } from './pipe/track-by.pipe'
import { ContadorItemsComponent } from './components/contador-items/contador-items.component'
import { MensajeServidorComponent } from './components/mensaje-servidor/mensaje-servidor.component'
import { MaterialModule } from './material.module'
import { DialogConfirmacionComponent } from './components/dialogo-confirmacion/dialogo.confirmacion.component'
import { SnackBarService } from './servicios/snackbar.service'

@NgModule({
  declarations: [
    ErrorCamposPlantillaComponent,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    TrackByPipe,
    ContadorItemsComponent,
    MensajeServidorComponent,
    DialogConfirmacionComponent,
  ],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MaterialModule],
  exports: [
    CommonModule,
    HttpClientModule,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    ReactiveFormsModule,
    FormsModule,
    TrackByPipe,
    ContadorItemsComponent,
    MensajeServidorComponent,
    DialogConfirmacionComponent,
    MaterialModule,
  ],
  providers: [SnackBarService],
})
export class SharedModule {}
