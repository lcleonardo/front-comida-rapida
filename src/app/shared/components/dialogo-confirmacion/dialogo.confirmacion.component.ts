import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo.confirmacion.component.html',
})
export class DialogConfirmacionComponent implements OnInit {
  titulo: string = 'IMPORTANTE!';
  mensaje: string = '¿ Continuar ?';
  eliminar: boolean = false;

  ngOnInit(): void {
    this.confirmar(false);
  }

  confirmar(opcion: boolean) {
    this.eliminar = opcion;
  }
}
