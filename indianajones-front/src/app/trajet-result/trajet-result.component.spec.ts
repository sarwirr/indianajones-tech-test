import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetResultComponent } from './trajet-result.component';

describe('TrajetResultComponent', () => {
  let component: TrajetResultComponent;
  let fixture: ComponentFixture<TrajetResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrajetResultComponent]
    });
    fixture = TestBed.createComponent(TrajetResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
