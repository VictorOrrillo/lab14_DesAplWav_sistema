import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTarifasComponent } from './crear-tarifas.component';

describe('CrearTarifasComponent', () => {
  let component: CrearTarifasComponent;
  let fixture: ComponentFixture<CrearTarifasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTarifasComponent]
    });
    fixture = TestBed.createComponent(CrearTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
