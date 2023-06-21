import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCinesComponent } from './listar-cines.component';

describe('ListarCinesComponent', () => {
  let component: ListarCinesComponent;
  let fixture: ComponentFixture<ListarCinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCinesComponent]
    });
    fixture = TestBed.createComponent(ListarCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
