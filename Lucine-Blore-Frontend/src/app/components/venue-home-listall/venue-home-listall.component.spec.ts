import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueHomeListallComponent } from './venue-home-listall.component';

describe('VenueHomeListallComponent', () => {
  let component: VenueHomeListallComponent;
  let fixture: ComponentFixture<VenueHomeListallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueHomeListallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueHomeListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
