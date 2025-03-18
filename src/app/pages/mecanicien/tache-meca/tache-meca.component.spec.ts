import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheMecaComponent } from './tache-meca.component';

describe('TacheMecaComponent', () => {
  let component: TacheMecaComponent;
  let fixture: ComponentFixture<TacheMecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TacheMecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheMecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
