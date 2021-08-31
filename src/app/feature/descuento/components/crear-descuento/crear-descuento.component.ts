import { DatePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Descuento } from "../../shared/model/descuento";
import { DescuentoService } from "../../shared/service/descuento.service";

@Component({
  selector: "app-crear-descuento",
  templateUrl: "./crear-descuento.component.html",
  styleUrls: ["./crear-descuento.component.css"],
})
export class CrearDescuentoComponent implements OnInit {
  formulario: FormGroup;
  empezarGuardado: boolean = false;
  descuentoCreadoConExito: boolean = false;
  mensajeError: string = "";

  constructor(
    protected servicio: DescuentoService,
    protected constructorFormulario: FormBuilder,
    protected formatoFecha: DatePipe
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
    if (!this.formulario.valid) {
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
    return new Descuento(
      this.formulario.get("fecha").value,
      this.formulario.get("porcentaje").value
    );
  }

  private prepararNuevoDescuento(): void {
    this.construirFormulario();
    this.descuentoCreadoConExito = true;
  }

  private construirFormulario(): void {
    this.formulario = this.constructorFormulario.group({
      fecha: [
        this.formatoFecha.transform(Date.now(), "yyyy-MM-dd"),
        Validators.required,
      ],
      porcentaje: ["0", Validators.required],
    });
  }

  vaciarMensajeError() {
    this.mensajeError = "";
  }

  mostrarMensajeError(): boolean {
    return this.mensajeError.length !== 0;
  }

}
