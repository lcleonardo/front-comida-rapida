import { AbstractControl } from "@angular/forms";

export class ValidadorComun {
  static validarPlacaVehiculo(control: AbstractControl) {
    let ultimoCaracter = control.value.slice(-1);
    let num = parseInt(ultimoCaracter);
    if (isNaN(num)) {
      return { validarPlacaVehiculo: true };
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
