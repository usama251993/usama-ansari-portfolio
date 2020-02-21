import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHomeItemComponent } from './portfolio-home-item.component';

describe('PortfolioHomeItemComponent', () => {
  let component: PortfolioHomeItemComponent;
  let fixture: ComponentFixture<PortfolioHomeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioHomeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
