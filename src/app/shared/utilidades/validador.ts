import { DatePipe } from "@angular/common";
import { AbstractControl } from "@angular/forms";

export class Validador {
  static validarPlacaVehiculo(control: AbstractControl) {
    let ultimoCaracter = control.value.slice(-1);
    let num = parseInt(ultimoCaracter);
    if(isNaN(num)) {
      return { validarPlacaVehiculo: true };
    }
    return null;
  }

  static fechaMenorAFechaActual(control: AbstractControl) {
    const datepipe: DatePipe = new DatePipe("en-US");
    const fecha = datepipe.transform(control.value, "yyyy-MM-dd");
    const fechaActual = datepipe.transform(Date.now(), "yyyy-MM-dd");
    if (fecha < fechaActual) {
      return { fechaMenorAFechaActual: true };
    }
    return null;
  }

  static menorOIgualACero(control: AbstractControl) {
    const valor = control.value;
    if (valor <= 0) {
      return { menorOIgualACero: true };
    }
    return null;
  }
}
