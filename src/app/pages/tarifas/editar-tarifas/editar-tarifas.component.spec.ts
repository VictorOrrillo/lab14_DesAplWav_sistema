import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarifasComponent } from './editar-tarifas.component';

describe('EditarTarifasComponent', () => {
  let component: EditarTarifasComponent;
  let fixture: ComponentFixture<EditarTarifasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTarifasComponent]
    });
    fixture = TestBed.createComponent(EditarTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
