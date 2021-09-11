import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { Router } from "@angular/router";

@Component({
  selector: "app-pedido",
  templateUrl: "./pedido.component.html",
  styleUrls: [],
})
export class PedidoComponent implements OnInit {
  constructor(protected router: Router) {}

  ngOnInit(): void {}

  onTabChanged(event: MatTabChangeEvent): void {
    switch (event.index) {
      case 0:
        this.router.navigate(["/pedido/listar"]);
        break;
      case 1:
        this.router.navigate(["/pedido/crear"]);
        break;
    }
  }
}
