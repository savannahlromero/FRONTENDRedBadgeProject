import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDeleteComponent } from './review-delete.component';

describe('ReviewDeleteComponent', () => {
  let component: ReviewDeleteComponent;
  let fixture: ComponentFixture<ReviewDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
