import { NgModule } from "@angular/core";

import { PedidoRoutingModule } from "./pedido-routing.module";
import { PedidoComponent } from "./components/pedido/pedido.component";
import { ListarPedidoComponent } from "./components/listar-pedido/listar-pedido.component";
import { CrearPedidoComponent } from "./components/crear-pedido/crear-pedido.component";
import { SharedModule } from "@shared/shared.module";
import { PedidoService } from "./shared/service/pedido.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    PedidoComponent, 
    ListarPedidoComponent, 
    CrearPedidoComponent],
  imports: [PedidoRoutingModule, SharedModule,
    NgbModule,
  ],
  providers: [PedidoService]
})
export class PedidoModule {}
