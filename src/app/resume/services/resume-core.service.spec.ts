import { TestBed } from '@angular/core/testing'

import { ResumeCoreService } from './resume-core.service'

describe('ResumeCoreService', () => {
  let service: ResumeCoreService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ResumeCoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
