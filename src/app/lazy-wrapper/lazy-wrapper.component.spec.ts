import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LazyWrapperComponent } from './lazy-wrapper.component';

describe('LazyWrapperComponent', () => {
  let component: LazyWrapperComponent;
  let fixture: ComponentFixture<LazyWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
