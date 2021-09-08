import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { PedidoComponent } from "./pedido.component";

fdescribe("PedidoComponent", () => {
  let fixture: ComponentFixture<PedidoComponent>;
  let component: PedidoComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PedidoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("deberia tener el router-outlet", () => {
    const routerOutlet = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(routerOutlet).not.toBeNull;
  });
});
