import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHomeWrapperComponent } from './portfolio-home-wrapper.component';

describe('PortfolioHomeWrapperComponent', () => {
  let component: PortfolioHomeWrapperComponent;
  let fixture: ComponentFixture<PortfolioHomeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioHomeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHomeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
