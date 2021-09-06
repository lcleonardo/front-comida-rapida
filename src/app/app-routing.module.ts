import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SecurityGuard } from "@core/guard/security.guard";
import { HomeComponent } from "@home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [SecurityGuard] },
  {
    path: "pedido",
    loadChildren: () =>
      import("@pedido/pedido.module").then((m) => m.PedidoModule),
  },
  {
    path: "descuento",
    loadChildren: () =>
      import("@descuento/descuento.module").then((m) => m.DescuentoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
