import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoConcluidoComponent } from './pedido-concluido.component';

describe('PedidoConcluidoComponent', () => {
  let component: PedidoConcluidoComponent;
  let fixture: ComponentFixture<PedidoConcluidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoConcluidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoConcluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
