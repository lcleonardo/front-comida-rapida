import { AbstractControl } from "@angular/forms";

export class Validador {
  static fechaMenorAFechaActual(control: AbstractControl) {
    const fecha = new Date(control.value);
    const fechaActual = new Date(Date.now());
    if (
      fecha.toLocaleDateString().replace("/", "").replace("/", "") <
      fechaActual.toLocaleDateString().replace("/", "").replace("/", "")
    ) {
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
