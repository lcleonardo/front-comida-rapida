import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-mensaje-servidor",
  templateUrl: "./mensaje-servidor.component.html",
  styleUrls: ["./mensaje-servidor.component.css"],
})
export class MensajeServidorComponent implements OnInit {
  @Input() mensaje: string = "";

  constructor() {}

  ngOnInit(): void {}

  cerrar(): void {
    this.mensaje = "";
  }
}
