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
        path: "crear",
        component: CrearDescuentoComponent,
      },
      {
        path: "listar",
        component: ListarDescuentoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecuentoRoutingModule {}
