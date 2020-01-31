import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCertificationsComponent } from './portfolio-certifications.component';

describe('PortfolioCertificationsComponent', () => {
  let component: PortfolioCertificationsComponent;
  let fixture: ComponentFixture<PortfolioCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
