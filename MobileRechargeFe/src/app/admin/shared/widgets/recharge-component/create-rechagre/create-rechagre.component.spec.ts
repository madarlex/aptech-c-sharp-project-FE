import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRechagreComponent } from './create-rechagre.component';

describe('CreateRechagreComponent', () => {
  let component: CreateRechagreComponent;
  let fixture: ComponentFixture<CreateRechagreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRechagreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRechagreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
