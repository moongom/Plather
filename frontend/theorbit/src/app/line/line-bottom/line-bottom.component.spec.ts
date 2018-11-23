import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBottomComponent } from './line-bottom.component';

describe('LineBottomComponent', () => {
  let component: LineBottomComponent;
  let fixture: ComponentFixture<LineBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
