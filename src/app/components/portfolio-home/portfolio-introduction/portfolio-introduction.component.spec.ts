import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioIntroductionComponent } from './portfolio-introduction.component';

describe('PortfolioIntroductionComponent', () => {
  let component: PortfolioIntroductionComponent;
  let fixture: ComponentFixture<PortfolioIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
