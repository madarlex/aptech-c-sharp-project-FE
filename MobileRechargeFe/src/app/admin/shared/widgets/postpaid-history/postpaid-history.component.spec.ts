import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidHistoryComponent } from './postpaid-history.component';

describe('PostpaidHistoryComponent', () => {
  let component: PostpaidHistoryComponent;
  let fixture: ComponentFixture<PostpaidHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
