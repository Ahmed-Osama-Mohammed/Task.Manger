import { TestBed } from '@angular/core/testing';

import { OurProgramsService } from './our-programs.service';

describe('OurProgramsService', () => {
  let service: OurProgramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurProgramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
