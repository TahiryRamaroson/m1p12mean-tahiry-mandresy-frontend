import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeRendezVousClientComponent } from './demande-rendez-vous-client.component';

describe('DemandeRendezVousClientComponent', () => {
  let component: DemandeRendezVousClientComponent;
  let fixture: ComponentFixture<DemandeRendezVousClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeRendezVousClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeRendezVousClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
