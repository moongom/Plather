import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPostPreviewComponent } from './activity-post-preview.component';

describe('ActivityPostPreviewComponent', () => {
  let component: ActivityPostPreviewComponent;
  let fixture: ComponentFixture<ActivityPostPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPostPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
