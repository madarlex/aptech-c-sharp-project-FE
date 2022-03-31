import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostpaidHistoryComponent } from './view-postpaid-history.component';

describe('ViewPostpaidHistoryComponent', () => {
  let component: ViewPostpaidHistoryComponent;
  let fixture: ComponentFixture<ViewPostpaidHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostpaidHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostpaidHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
