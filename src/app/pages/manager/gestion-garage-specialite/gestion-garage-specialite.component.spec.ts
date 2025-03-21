import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGarageSpecialiteComponent } from './gestion-garage-specialite.component';

describe('GestionGarageSpecialiteComponent', () => {
  let component: GestionGarageSpecialiteComponent;
  let fixture: ComponentFixture<GestionGarageSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGarageSpecialiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionGarageSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
