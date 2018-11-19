import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpecificActivitiesComponent } from './show-specific-activities.component';

describe('ShowSpecificActivitiesComponent', () => {
  let component: ShowSpecificActivitiesComponent;
  let fixture: ComponentFixture<ShowSpecificActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSpecificActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpecificActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
