import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHomeListallComponent } from './review-home-listall.component';

describe('ReviewHomeListallComponent', () => {
  let component: ReviewHomeListallComponent;
  let fixture: ComponentFixture<ReviewHomeListallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewHomeListallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHomeListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
