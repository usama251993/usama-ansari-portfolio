import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNavbarComponent } from './portfolio-navbar.component';

describe('PortfolioNavbarComponent', () => {
  let component: PortfolioNavbarComponent;
  let fixture: ComponentFixture<PortfolioNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
