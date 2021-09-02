import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SecurityGuard } from "@core/guard/security.guard";
import { HomeComponent } from "@home/home.component";

const routes: Routes = [
  
  { path: "home", component: HomeComponent, canActivate: [SecurityGuard] },
  {
    path: "pedido",
    loadChildren: () =>
      import("./feature/pedido/pedido.module").then((m) => m.PedidoModule),
  },
  {
    path: "descuento",
    loadChildren: () =>
      import("./feature/descuento/descuento.module").then(
        (m) => m.DescuentoModule
      ),
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
