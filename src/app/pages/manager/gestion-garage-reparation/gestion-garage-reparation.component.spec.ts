import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGarageReparationComponent } from './gestion-garage-reparation.component';

describe('GestionGarageReparationComponent', () => {
  let component: GestionGarageReparationComponent;
  let fixture: ComponentFixture<GestionGarageReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGarageReparationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionGarageReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
