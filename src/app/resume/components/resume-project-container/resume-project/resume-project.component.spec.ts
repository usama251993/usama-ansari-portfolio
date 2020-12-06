import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ResumeProjectsComponent } from './resume-projects.component'

describe('ResumeProjectsComponent', () => {
  let component: ResumeProjectsComponent
  let fixture: ComponentFixture<ResumeProjectsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeProjectsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeProjectsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
