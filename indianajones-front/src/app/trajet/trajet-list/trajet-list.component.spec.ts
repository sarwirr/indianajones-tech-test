import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetListComponent } from './trajet-list.component';

describe('TrajetListComponent', () => {
  let component: TrajetListComponent;
  let fixture: ComponentFixture<TrajetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrajetListComponent]
    });
    fixture = TestBed.createComponent(TrajetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
