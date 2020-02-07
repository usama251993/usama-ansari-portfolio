import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWorkExperienceComponent } from './portfolio-work-experience.component';

describe('PortfolioWorkExperienceComponent', () => {
  let component: PortfolioWorkExperienceComponent;
  let fixture: ComponentFixture<PortfolioWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
