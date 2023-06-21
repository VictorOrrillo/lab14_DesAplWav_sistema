import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarifasComponent } from './listar-tarifas.component';

describe('ListarTarifasComponent', () => {
  let component: ListarTarifasComponent;
  let fixture: ComponentFixture<ListarTarifasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTarifasComponent]
    });
    fixture = TestBed.createComponent(ListarTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
