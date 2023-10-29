import { TestBed } from '@angular/core/testing';

import { Enrollment3Service } from './enrollment3.service';

describe('EnrollmentService', () => {
  let service: Enrollment3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Enrollment3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
export { Enrollment3Service};