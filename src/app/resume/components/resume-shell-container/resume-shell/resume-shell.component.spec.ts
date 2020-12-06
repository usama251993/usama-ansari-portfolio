import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ResumeShellComponent } from './resume-shell.component'

describe('ResumeShellComponent', () => {
  let component: ResumeShellComponent
  let fixture: ComponentFixture<ResumeShellComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeShellComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
