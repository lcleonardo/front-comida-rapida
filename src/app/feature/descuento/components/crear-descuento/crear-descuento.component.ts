import { DatePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Validador } from "@shared/utilidades/validador";
import { Descuento } from "../../shared/model/descuento";
import { DescuentoService } from "../../shared/service/descuento.service";

@Component({
  selector: "app-crear-descuento",
  templateUrl: "./crear-descuento.component.html",
  styleUrls: [],
})
export class CrearDescuentoComponent implements OnInit {
  formulario: FormGroup;
  mensajeServidor: string = "";

  constructor(
    protected servicio: DescuentoService,
    protected formatoFecha: DatePipe,
    protected enrutador: Router
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  guardar() {
    this.mensajeServidor = "";
    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.servicio.guardar(this.obtenerDescuento()).subscribe(
      () => {},
      (error) => this.obtenerMensajeDelServidor(error)
    );
    this.enrutador.navigate(["descuento/listar"]);
  }

  private obtenerMensajeDelServidor(error: HttpErrorResponse): void {
    this.mensajeServidor = error.error["mensaje"];
  }

  private obtenerDescuento(): Descuento {
    return new Descuento(
      this.formulario.get("fecha").value,
      this.formulario.get("porcentaje").value
    );
  }

  private construirFormulario(): void {
    this.formulario = new FormGroup(
      {
        fecha: new FormControl(
          this.formatoFecha.transform(Date.now(), "yyyy-MM-dd"),
          [Validators.required, Validador.fechaMenorAFechaActual]
        ),
        porcentaje: new FormControl("0", [
          Validators.required,
          Validador.menorOIgualACero,
        ]),
      },
      { updateOn: "blur" }
    );
  }
}
