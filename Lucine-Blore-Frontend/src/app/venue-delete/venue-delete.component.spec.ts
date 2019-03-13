import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDeleteComponent } from './venue-delete.component';

describe('VenueDeleteComponent', () => {
  let component: VenueDeleteComponent;
  let fixture: ComponentFixture<VenueDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
