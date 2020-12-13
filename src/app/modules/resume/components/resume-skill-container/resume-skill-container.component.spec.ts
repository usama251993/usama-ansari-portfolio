import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ResumeSkillContainerComponent } from './resume-skill-container.component'

describe('ResumeSkillContainerComponent', () => {
  let component: ResumeSkillContainerComponent
  let fixture: ComponentFixture<ResumeSkillContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeSkillContainerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSkillContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
