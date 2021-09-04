import { Component, Input } from "@angular/core";

@Component({
  selector: "app-contador-items",
  templateUrl: "./contador-items.component.html",
})
export class ContadorItemsComponent {

    @Input() numeroDeItems : number

}
