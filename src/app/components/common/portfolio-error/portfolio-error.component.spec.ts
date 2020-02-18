import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioErrorComponent } from './portfolio-error.component';

describe('PortfolioErrorComponent', () => {
  let component: PortfolioErrorComponent;
  let fixture: ComponentFixture<PortfolioErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
