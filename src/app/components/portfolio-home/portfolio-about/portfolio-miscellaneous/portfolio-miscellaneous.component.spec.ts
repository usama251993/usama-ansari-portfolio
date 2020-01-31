import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMiscellaneousComponent } from './portfolio-miscellaneous.component';

describe('PortfolioMiscellaneousComponent', () => {
  let component: PortfolioMiscellaneousComponent;
  let fixture: ComponentFixture<PortfolioMiscellaneousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMiscellaneousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMiscellaneousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
