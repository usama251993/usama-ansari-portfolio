import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioContactComponent } from './portfolio-contact.component';

describe('PortfolioContactComponent', () => {
  let component: PortfolioContactComponent;
  let fixture: ComponentFixture<PortfolioContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
