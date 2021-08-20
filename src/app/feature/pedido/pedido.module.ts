import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';


@NgModule({
  declarations: [
  
    PedidoComponent,
       ListarPedidoComponent,
       CrearPedidoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
