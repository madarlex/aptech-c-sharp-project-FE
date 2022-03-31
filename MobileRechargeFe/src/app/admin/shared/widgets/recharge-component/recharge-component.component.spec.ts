import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeComponentComponent } from './recharge-component.component';

describe('RechargeComponentComponent', () => {
  let component: RechargeComponentComponent;
  let fixture: ComponentFixture<RechargeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
