import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.component.html',
  styleUrls: []
})
export class DescuentoComponent implements OnInit {

  constructor(protected servicioHttp: HttpService) { }

  ngOnInit(): void {
  }

}
