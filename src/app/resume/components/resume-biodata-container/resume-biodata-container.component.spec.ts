import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ResumeBiodataContainerComponent } from './resume-biodata-container.component'

describe('ResumeBiodataContainerComponent', () => {
  let component: ResumeBiodataContainerComponent
  let fixture: ComponentFixture<ResumeBiodataContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeBiodataContainerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBiodataContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
