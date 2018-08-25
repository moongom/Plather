import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertimelineSpecificComponent } from './usertimeline-specific.component';

describe('UsertimelineSpecificComponent', () => {
  let component: UsertimelineSpecificComponent;
  let fixture: ComponentFixture<UsertimelineSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertimelineSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertimelineSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
