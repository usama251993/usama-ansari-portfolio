import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ResumeBiodataComponent } from './resume-biodata.component'

describe('ResumeBiodataComponent', () => {
  let component: ResumeBiodataComponent
  let fixture: ComponentFixture<ResumeBiodataComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeBiodataComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBiodataComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
