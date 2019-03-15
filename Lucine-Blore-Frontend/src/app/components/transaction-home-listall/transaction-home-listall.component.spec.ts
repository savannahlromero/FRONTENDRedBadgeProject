import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHomeListallComponent } from './transaction-home-listall.component';

describe('TransactionHomeListallComponent', () => {
  let component: TransactionHomeListallComponent;
  let fixture: ComponentFixture<TransactionHomeListallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHomeListallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHomeListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
