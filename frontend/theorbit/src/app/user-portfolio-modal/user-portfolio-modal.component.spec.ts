import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPortfolioModalComponent } from './user-portfolio-modal.component';

describe('UserPortfolioModalComponent', () => {
  let component: UserPortfolioModalComponent;
  let fixture: ComponentFixture<UserPortfolioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPortfolioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPortfolioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
