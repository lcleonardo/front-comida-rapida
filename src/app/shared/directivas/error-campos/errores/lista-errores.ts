import { InjectionToken } from "@angular/core";

export const listaErrores = {
  required: (_) => `Dato obligatorio`,
  min: ({ min }) => `Valor mínimo ${min}`,
  max: ({ max }) => `Valor máximo ${max}`,
  repetido: () => `Elemento repetido`,
  email: () => `Esto no es un correo`,
  minlength: ({ requiredLength, actualLength }) =>
    `Mínimo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
  maxlength: ({ requiredLength, actualLength }) =>
    `Máximo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`,
  fechaMenorAFechaActual: (_) => `Debe ser igual o mayor a la fecha actual`,
  menorOIgualACero: (_) => `Debe ser mayor a: 0.0`,
  validarPlacaVehiculo: (_) => `Debe terminar en un número entero del 0 al 9.`,
};

export const FORM_ERRORS = new InjectionToken("FORM_ERRORS", {
  providedIn: "root",
  factory: () => listaErrores,
});
