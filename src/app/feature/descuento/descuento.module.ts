import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecuentoRoutingModule } from './decuento-routing.module';
import { ListarDescuentoComponent } from './components/listar-descuento/listar-descuento.component';
import { CrearDescuentoComponent } from './components/crear-descuento/crear-descuento.component';
import { DescuentoComponent } from './components/descuento/descuento.component';


@NgModule({
  declarations: [
    ListarDescuentoComponent,
    CrearDescuentoComponent,
    DescuentoComponent
  ],
  imports: [
    CommonModule,
    DecuentoRoutingModule
  ]
})
export class DescuentoModule { }
