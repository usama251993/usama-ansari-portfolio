import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioScrollbarComponent } from './portfolio-scrollbar.component';

describe('PortfolioScrollbarComponent', () => {
  let component: PortfolioScrollbarComponent;
  let fixture: ComponentFixture<PortfolioScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
