import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetFormComponent } from './trajet-form.component';

describe('TrajetFormComponent', () => {
  let component: TrajetFormComponent;
  let fixture: ComponentFixture<TrajetFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrajetFormComponent]
    });
    fixture = TestBed.createComponent(TrajetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
