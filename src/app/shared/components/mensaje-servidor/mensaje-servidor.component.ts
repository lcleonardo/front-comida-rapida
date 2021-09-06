import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-mensaje-servidor",
  templateUrl: "./mensaje-servidor.component.html",
})
export class MensajeServidorComponent implements OnInit {
  @Input() mensaje: string;

  constructor() {}

  ngOnInit(): void {}

  cancelar(): void {
    this.mensaje = "";
  }
}
