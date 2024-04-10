import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetResultTableComponent } from './trajet-result-table.component';

describe('TrajetResultTableComponent', () => {
  let component: TrajetResultTableComponent;
  let fixture: ComponentFixture<TrajetResultTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrajetResultTableComponent]
    });
    fixture = TestBed.createComponent(TrajetResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
