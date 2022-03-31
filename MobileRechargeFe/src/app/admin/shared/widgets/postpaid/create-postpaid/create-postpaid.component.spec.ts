import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostpaidComponent } from './create-postpaid.component';

describe('CreatePostpaidComponent', () => {
  let component: CreatePostpaidComponent;
  let fixture: ComponentFixture<CreatePostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
