import { Component, OnInit } from '@angular/core';
import { Descuento } from '../../shared/model/descuento';
import { DescuentoService } from '../../shared/service/descuento.service';

@Component({
  selector: 'app-crear-descuento',
  templateUrl: './crear-descuento.component.html',
  styleUrls: ['./crear-descuento.component.css']
})
export class CrearDescuentoComponent implements OnInit {

  constructor(protected servicio : DescuentoService) { }

  ngOnInit(): void {
    this.guardar();
  }

  guardar(){
    let descuento : Descuento = new Descuento("2021-08-27", 10.0);
    this.servicio.guardar(descuento).subscribe(respuesta => console.log(respuesta)
    );
  }

}
