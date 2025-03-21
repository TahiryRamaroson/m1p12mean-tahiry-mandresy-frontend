import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGarageMarqueComponent } from './gestion-garage-marque.component';

describe('GestionGarageMarqueComponent', () => {
  let component: GestionGarageMarqueComponent;
  let fixture: ComponentFixture<GestionGarageMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGarageMarqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionGarageMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
