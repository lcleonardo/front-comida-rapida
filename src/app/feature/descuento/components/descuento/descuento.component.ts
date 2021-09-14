import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { Router } from "@angular/router";

@Component({
  selector: "app-descuento",
  templateUrl: "./descuento.component.html",
  styleUrls: [],
})
export class DescuentoComponent implements OnInit {
  constructor(protected router: Router) {}

  ngOnInit(): void {}

  onTabChanged(event: MatTabChangeEvent): void {
    switch (event.index) {
      case 0:
        this.router.navigate(["/descuento/listar"]);
        break;
    }
  }
}
