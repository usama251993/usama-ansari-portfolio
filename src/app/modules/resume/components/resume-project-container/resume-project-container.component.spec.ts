import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ResumeProjectsContainerComponent } from './resume-projects-container.component'

describe('ResumeProjectsContainerComponent', () => {
  let component: ResumeProjectsContainerComponent
  let fixture: ComponentFixture<ResumeProjectsContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeProjectsContainerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeProjectsContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
