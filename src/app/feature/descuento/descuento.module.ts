import { NgModule } from '@angular/core';

import { ListarDescuentoComponent } from './components/listar-descuento/listar-descuento.component';
import { CrearDescuentoComponent } from './components/crear-descuento/crear-descuento.component';
import { DescuentoComponent } from './components/descuento/descuento.component';
import { SharedModule } from '@shared/shared.module';
import { DescuentoService } from './shared/service/descuento.service';
import { DescuentoRoutingModule } from './descuento-routing.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    ListarDescuentoComponent,
    CrearDescuentoComponent,
    DescuentoComponent
  ],
  imports: [
    SharedModule,
    DescuentoRoutingModule,
  ],
  providers:[DescuentoService,DatePipe]
})
export class DescuentoModule { }

