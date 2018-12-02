import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioOuterComponent } from './portfolio-outer.component';

describe('PortfolioOuterComponent', () => {
  let component: PortfolioOuterComponent;
  let fixture: ComponentFixture<PortfolioOuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioOuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
