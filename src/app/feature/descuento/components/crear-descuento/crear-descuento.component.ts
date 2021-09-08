import { DatePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ValidadorComun } from "@shared/validador/validador-comun";
import { ValidadorFecha } from "@shared/validador/validador-fecha";
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
    this.servicio.guardar(this.formulario.value).subscribe(
      () => this.enrutador.navigate(["descuento/listar"]),
      (error) => this.obtenerMensajeDelServidor(error)
    );
  }

  private obtenerMensajeDelServidor(error: HttpErrorResponse): void {
    this.mensajeServidor = error.error["mensaje"];
  }

  private construirFormulario(): void {
    this.formulario = new FormGroup(
      {
        fecha: new FormControl(
          this.formatoFecha.transform(Date.now(), "yyyy-MM-dd"),
          [Validators.required, ValidadorFecha.fechaMenorAFechaActual]
        ),
        porcentaje: new FormControl("0", [
          Validators.required,
          ValidadorComun.menorOIgualACero,
        ]),
      },
      { updateOn: "blur" }
    );
  }
}
