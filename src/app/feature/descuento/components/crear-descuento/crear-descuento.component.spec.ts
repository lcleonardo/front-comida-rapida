import { DatePipe } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { DescuentoService } from "@descuento/shared/service/descuento.service";
import { of } from "rxjs";

import { CrearDescuentoComponent } from "./crear-descuento.component";

class DescuentoServiceStub {
  guardar() {
    return of(true);
  }
}

class DatePipeStub {
  transform() {
    return "2021-09-01";
  }
}

class RouterStub {
  navigate() {}
}

fdescribe("CrearDescuentoComponent", () => {
  let component: CrearDescuentoComponent;
  let fixture: ComponentFixture<CrearDescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearDescuentoComponent],
      providers: [
        { provide: DescuentoService, useClass: DescuentoServiceStub },
        { provide: DatePipe, useClass: DatePipeStub },
        { provide: Router, useClass: RouterStub },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("deberia constuir el formulario", () => {
    expect(Object.keys(component.formulario.controls)).toEqual([
      "fecha",
      "porcentaje",
    ]);
  });

  it("deberia ejecutar el metodo de guardar", () => {
    //TODO: Crear test de metodo guardar
  });
});
