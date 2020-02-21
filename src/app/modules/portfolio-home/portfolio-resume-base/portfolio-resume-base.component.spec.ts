import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioResumeBaseComponent } from './portfolio-resume-base.component';

describe('PortfolioResumeBaseComponent', () => {
  let component: PortfolioResumeBaseComponent;
  let fixture: ComponentFixture<PortfolioResumeBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioResumeBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioResumeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
