import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearPedidoComponent } from "./components/crear-pedido/crear-pedido.component";
import { ListarPedidoComponent } from "./components/listar-pedido/listar-pedido.component";
import { PedidoComponent } from "./components/pedido/pedido.component";

const routes: Routes = [
  {
    path: "",
    component: PedidoComponent,
    children: [
      {
        path: "",
        redirectTo: '/pedido/listar',
        pathMatch: 'full',
      },
      {
        path: "crear",
        component: CrearPedidoComponent,
      },
      {
        path: "listar",
        component: ListarPedidoComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoRoutingModule {}
