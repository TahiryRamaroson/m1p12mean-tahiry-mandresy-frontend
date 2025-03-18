import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueRendezVousClientComponent } from './historique-rendez-vous-client.component';

describe('HistoriqueRendezVousClientComponent', () => {
  let component: HistoriqueRendezVousClientComponent;
  let fixture: ComponentFixture<HistoriqueRendezVousClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueRendezVousClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueRendezVousClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
