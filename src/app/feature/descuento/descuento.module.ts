import { NgModule } from '@angular/core'

import { ListarDescuentoComponent } from './components/listar-descuento/listar-descuento.component'
import { CrearDescuentoComponent } from './components/crear-descuento/crear-descuento.component'
import { DescuentoComponent } from './components/descuento/descuento.component'
import { SharedModule } from '@shared/shared.module'
import { DescuentoService } from './shared/service/descuento.service'
import { DescuentoRoutingModule } from './descuento-routing.module'
import { HttpService } from '@core/services/http.service'
import { DatePipe } from '@angular/common'
import { FiltroDescuentosPipe } from './shared/pipe/filtro-descuentos.pipe'

@NgModule({
  declarations: [
    DescuentoComponent,
    ListarDescuentoComponent,
    CrearDescuentoComponent,
  ],
  imports: [SharedModule, DescuentoRoutingModule],
  providers: [DescuentoService, HttpService, FiltroDescuentosPipe, DatePipe],
})
export class DescuentoModule {}
