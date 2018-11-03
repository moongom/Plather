import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPortfolioLeftProfileComponent } from './user-portfolio-left-profile.component';

describe('UserPortfolioLeftProfileComponent', () => {
  let component: UserPortfolioLeftProfileComponent;
  let fixture: ComponentFixture<UserPortfolioLeftProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPortfolioLeftProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPortfolioLeftProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
