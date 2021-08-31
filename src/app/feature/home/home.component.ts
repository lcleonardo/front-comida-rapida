// import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  // private xml: string = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  // xmlns:act="http://action.trm.services.generic.action.superfinanciera.nexura.sc.com.co/">
  //     <soapenv:Header/>
  //     <soapenv:Body>
  //         <act:queryTCRM>
  // </act:queryTCRM>
  //     </soapenv:Body>
  // </soapenv:Envelope>`;

  // url : string = "trm/SuperfinancieraWebServiceTRM/TCRMServicesWebService/TCRMServicesWebService?WSDL";

  constructor(protected servicioHttp: HttpService) { }

  ngOnInit() {
  //   let doc = new DOMParser().parseFromString(this.xml, "application/xml");
  // this.servicioHttp.doPost( `${this.url}` ,doc,  {
  //     headers: new HttpHeaders({
  //       "Content-Type": "text/xml",
  //       "Server-Protocol":"SOAP",
  //       "Accept": "text/xml"
  //     })
  //   }).subscribe(respuesta => console.log(respuesta)
  //   );
  }


}
