import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeContactContainerComponent } from './resume-contact-container.component';

describe('ResumeContactContainerComponent', () => {
  let component: ResumeContactContainerComponent;
  let fixture: ComponentFixture<ResumeContactContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeContactContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeContactContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
