import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { AppModule } from "src/app/app.module";

import { CrearPedidoComponent } from "./crear-pedido.component";

describe("CrearPedidoComponent", () => {
  let component: CrearPedidoComponent;
  let fixture: ComponentFixture<CrearPedidoComponent>;

  const constructorFormulario = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CrearPedidoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("deberia crear un pedido", async () => {
    component.formulario = constructorFormulario.group({
      fecha: "21-08-2021",
      codigoProducto: "1000",
      codigoCliente: "1094911833",
      direccionDomicilio: "BIS Avenida centenario 123",
      placaVehiculo: "VHJ234",
      precioCompra: "20000",
    });
    // component.guardar($event:Event);
    // expect(component.pedidoCreadoConExito).toBeTrue;
  });
});
