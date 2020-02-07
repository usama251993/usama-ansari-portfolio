import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLoadingComponent } from './portfolio-loading.component';

describe('PortfolioLoadingComponent', () => {
  let component: PortfolioLoadingComponent;
  let fixture: ComponentFixture<PortfolioLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
