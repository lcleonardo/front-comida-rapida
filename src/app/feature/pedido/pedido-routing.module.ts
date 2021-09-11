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
        redirectTo: "listar",
        pathMatch: "full",
      },
      {
        path: "listar",
        component: ListarPedidoComponent,
      },
      {
        path: "crear",
        component: CrearPedidoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoRoutingModule {}
