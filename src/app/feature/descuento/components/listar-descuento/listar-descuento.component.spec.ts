import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDescuentoComponent } from './listar-descuento.component';

describe('ListarDescuentoComponent', () => {
  let component: ListarDescuentoComponent;
  let fixture: ComponentFixture<ListarDescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDescuentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
