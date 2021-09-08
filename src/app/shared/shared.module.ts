import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MensajeErrorCamposDirective } from "./directivas/error-campos/directiva/mensaje-error-campos.directive";
import { MensajeErrorCamposSubmitDirective } from "./directivas/error-campos/directiva/mensaje-error-campos-submit.directive";
import { MensajeErrorCamposContenedorDirective } from "./directivas/error-campos/directiva/mensaje-error-campos-contenedor.directive";
import { ErrorCamposPlantillaComponent } from "./directivas/error-campos/componente/error-campos-plantilla.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TrackByPipe } from "./pipe/track-by.pipe";
import { ContadorItemsComponent } from "./components/contador-items/contador-items.component";
import { MensajeServidorComponent } from "./components/mensaje-servidor/mensaje-servidor.component";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [
    ErrorCamposPlantillaComponent,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    TrackByPipe,
    ContadorItemsComponent,
    MensajeServidorComponent,
  ],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatSliderModule],
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
  ],
})
export class SharedModule {}
