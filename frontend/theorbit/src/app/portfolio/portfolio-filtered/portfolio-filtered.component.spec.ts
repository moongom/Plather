import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFilteredComponent } from './portfolio-filtered.component';

describe('PortfolioFilteredComponent', () => {
  let component: PortfolioFilteredComponent;
  let fixture: ComponentFixture<PortfolioFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
