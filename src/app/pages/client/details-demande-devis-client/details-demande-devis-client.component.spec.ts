import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDemandeDevisClientComponent } from './details-demande-devis-client.component';

describe('DetailsDemandeDevisClientComponent', () => {
  let component: DetailsDemandeDevisClientComponent;
  let fixture: ComponentFixture<DetailsDemandeDevisClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsDemandeDevisClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDemandeDevisClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
