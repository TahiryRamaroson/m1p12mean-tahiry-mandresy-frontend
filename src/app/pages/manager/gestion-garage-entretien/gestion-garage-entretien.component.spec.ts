import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGarageEntretienComponent } from './gestion-garage-entretien.component';

describe('GestionGarageEntretienComponent', () => {
  let component: GestionGarageEntretienComponent;
  let fixture: ComponentFixture<GestionGarageEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGarageEntretienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionGarageEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
