import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { HttpService } from "@core/services/http.service";
import { DescuentoRoutingModule } from "@descuento/descuento-routing.module";
import { DescuentoService } from "@descuento/shared/service/descuento.service";

import { CrearDescuentoComponent } from "./crear-descuento.component";

describe("CrearDescuentoComponent", () => {
  let component: CrearDescuentoComponent;
  let fixture: ComponentFixture<CrearDescuentoComponent>;
  let htmlElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearDescuentoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        DescuentoRoutingModule
      ],
      providers: [DescuentoService, HttpService, DatePipe],
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

  it("formulario es invalido cuando esta vacio", () => {
    expect(component.formulario.valid).toBeFalsy();
  });

  it("Deberia llamar al metodo submit del formulario", async () => {
    fixture.detectChanges();
    spyOn(component, "guardar");
    htmlElement = fixture.debugElement.query(By.css("button")).nativeElement;
    htmlElement.click();
    expect(component.guardar).toHaveBeenCalledTimes(0);
  });

  it("Deberia registrar un descuento", () => {
    expect(component.formulario.valid).toBeFalsy();
    component.formulario.controls.fecha.setValue("2021-07-09");
    component.formulario.controls.porcentaje.setValue("10");
    expect(component.formulario.valid).toBeTruthy();
    component.guardar();
  });
});
