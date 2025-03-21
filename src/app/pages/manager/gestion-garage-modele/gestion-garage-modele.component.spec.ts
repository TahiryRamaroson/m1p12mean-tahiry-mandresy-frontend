import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGarageModeleComponent } from './gestion-garage-modele.component';

describe('GestionGarageModeleComponent', () => {
  let component: GestionGarageModeleComponent;
  let fixture: ComponentFixture<GestionGarageModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGarageModeleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionGarageModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
