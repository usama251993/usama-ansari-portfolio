import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProfileDocumentsComponent } from './portfolio-profile-documents.component';

describe('PortfolioProfileDocumentsComponent', () => {
  let component: PortfolioProfileDocumentsComponent;
  let fixture: ComponentFixture<PortfolioProfileDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProfileDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProfileDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
