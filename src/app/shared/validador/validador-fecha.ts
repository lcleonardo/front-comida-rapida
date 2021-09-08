import { DatePipe } from "@angular/common";
import { AbstractControl } from "@angular/forms";

export class ValidadorFecha {
  static fechaMenorAFechaActual(control: AbstractControl) {
    const datepipe: DatePipe = new DatePipe("en-US");
    const fecha = datepipe.transform(control.value, "yyyy-MM-dd");
    const fechaActual = datepipe.transform(Date.now(), "yyyy-MM-dd");
    if (fecha < fechaActual) {
      return { fechaMenorAFechaActual: true };
    }
    return null;
  }
}
