import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSkillsComponent } from './portfolio-skills.component';

describe('PortfolioSkillsComponent', () => {
  let component: PortfolioSkillsComponent;
  let fixture: ComponentFixture<PortfolioSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
