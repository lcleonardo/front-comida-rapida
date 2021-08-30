import { NgModule } from '@angular/core';

import { DecuentoRoutingModule } from './decuento-routing.module';
import { ListarDescuentoComponent } from './components/listar-descuento/listar-descuento.component';
import { CrearDescuentoComponent } from './components/crear-descuento/crear-descuento.component';
import { DescuentoComponent } from './components/descuento/descuento.component';
import { SharedModule } from '@shared/shared.module';
import { DescuentoService } from './shared/service/descuento.service';


@NgModule({
  declarations: [
    ListarDescuentoComponent,
    CrearDescuentoComponent,
    DescuentoComponent
  ],
  imports: [
    DecuentoRoutingModule,
    SharedModule,
  ],
  providers:[DescuentoService]
})
export class DescuentoModule { }

