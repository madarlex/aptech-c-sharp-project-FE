import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRechargeHistoryComponent } from './view-recharge-history.component';

describe('ViewRechargeHistoryComponent', () => {
  let component: ViewRechargeHistoryComponent;
  let fixture: ComponentFixture<ViewRechargeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRechargeHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRechargeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
