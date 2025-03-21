import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireDevisClientComponent } from './faire-devis-client.component';

describe('FaireDevisClientComponent', () => {
  let component: FaireDevisClientComponent;
  let fixture: ComponentFixture<FaireDevisClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaireDevisClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaireDevisClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
