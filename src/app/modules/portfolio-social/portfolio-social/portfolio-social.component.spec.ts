import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSocialComponent } from './portfolio-social.component';

describe('PortfolioSocialComponent', () => {
  let component: PortfolioSocialComponent;
  let fixture: ComponentFixture<PortfolioSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
