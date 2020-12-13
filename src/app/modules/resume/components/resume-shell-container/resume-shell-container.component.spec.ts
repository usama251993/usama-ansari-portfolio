import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ResumeShellContainerComponent } from './resume-shell-container.component'

describe('ResumeShellContainerComponent', () => {
  let component: ResumeShellContainerComponent
  let fixture: ComponentFixture<ResumeShellContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeShellContainerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeShellContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
