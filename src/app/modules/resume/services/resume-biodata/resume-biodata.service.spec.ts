import { TestBed } from '@angular/core/testing'

import { ResumeBiodataService } from './resume-biodata.service'

describe('ResumeBiodataService', () => {
  let service: ResumeBiodataService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ResumeBiodataService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
