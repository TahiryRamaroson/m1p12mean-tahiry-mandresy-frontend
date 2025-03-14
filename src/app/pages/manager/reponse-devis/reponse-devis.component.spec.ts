import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseDevisComponent } from './reponse-devis.component';

describe('ReponseDevisComponent', () => {
  let component: ReponseDevisComponent;
  let fixture: ComponentFixture<ReponseDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReponseDevisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReponseDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
