import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHomeBaseComponent } from './portfolio-home-base.component';

describe('PortfolioHomeBaseComponent', () => {
  let component: PortfolioHomeBaseComponent;
  let fixture: ComponentFixture<PortfolioHomeBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioHomeBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHomeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
