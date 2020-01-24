import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMeterComponent } from './portfolio-meter.component';

describe('PortfolioMeterComponent', () => {
  let component: PortfolioMeterComponent;
  let fixture: ComponentFixture<PortfolioMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioMeterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
