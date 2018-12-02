import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModalLeftProfileComponent } from './portfolio-modal-left-profile.component';

describe('PortfolioModalLeftProfileComponent', () => {
  let component: PortfolioModalLeftProfileComponent;
  let fixture: ComponentFixture<PortfolioModalLeftProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioModalLeftProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioModalLeftProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
