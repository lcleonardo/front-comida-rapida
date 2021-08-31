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
  empezarGuardado: boolean = false;
  descuentoCreadoConExito: boolean = false;
  mensajeError: string = "";

  constructor(
    protected servicio: DescuentoService,
    protected formatoFecha: DatePipe,
    protected enrutador: Router
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
  }

  cancelar(): void {
    this.construirFormulario();
    this.descuentoCreadoConExito = false;
    this.empezarGuardado = false;
  }

  guardar() {
    this.descuentoCreadoConExito = false;
    this.mensajeError = "";

    console.warn(this.formulario.value);

    if (this.formulario.invalid) {
      return;
    }

    this.empezarGuardado = true;
    let descuento: Descuento = this.obtenerDescuento();
    this.servicio.guardar(descuento).subscribe(
      () => this.prepararNuevoDescuento(),
      (error) => this.manejarError(error)
    );
    this.empezarGuardado = false;
  }

  private manejarError(error: HttpErrorResponse): void {
    this.mensajeError = error.error["mensaje"];
  }

  private obtenerDescuento(): Descuento {
    let porcentaje = this.formulario.get("porcentaje").value / 100;
    return new Descuento(this.formulario.get("fecha").value, porcentaje);
  }

  private prepararNuevoDescuento(): void {
    this.construirFormulario();
    this.descuentoCreadoConExito = true;
    this.enrutador.navigate(["descuento/listar"]);
  }

  private construirFormulario(): void {
    this.formulario = new FormGroup({
      fecha: new FormControl(
        this.formatoFecha.transform(Date.now(), "yyyy-MM-dd"),
        [Validators.required, Validador.fechaMenorAFechaActual]
      ),
      porcentaje: new FormControl("0", [
        Validators.required,
        Validador.menorOIgualACero,
      ]),
    });
  }

  vaciarMensajeError() {
    this.mensajeError = "";
  }

  mostrarMensajeError(): boolean {
    return this.mensajeError.length !== 0;
  }
}
