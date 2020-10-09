import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy1ContentComponent } from './lazy1-content.component';

describe('Lazy1ContentComponent', () => {
  let component: Lazy1ContentComponent;
  let fixture: ComponentFixture<Lazy1ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazy1ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazy1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
