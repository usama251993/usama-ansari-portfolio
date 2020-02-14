import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHomeTemplateComponent } from './portfolio-home-template.component';

describe('PortfolioHomeTemplateComponent', () => {
  let component: PortfolioHomeTemplateComponent;
  let fixture: ComponentFixture<PortfolioHomeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioHomeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHomeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
