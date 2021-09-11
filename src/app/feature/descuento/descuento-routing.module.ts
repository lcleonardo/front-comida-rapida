import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearDescuentoComponent } from "./components/crear-descuento/crear-descuento.component";
import { DescuentoComponent } from "./components/descuento/descuento.component";
import { ListarDescuentoComponent } from "./components/listar-descuento/listar-descuento.component";

const routes: Routes = [
  {
    path: "",
    component: DescuentoComponent,
    children: [
      {
        path: "",
        redirectTo: "listar",
        pathMatch: "full",
      },
      {
        path: "listar",
        component: ListarDescuentoComponent,
      },
      {
        path: "crear",
        component: CrearDescuentoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescuentoRoutingModule {}
