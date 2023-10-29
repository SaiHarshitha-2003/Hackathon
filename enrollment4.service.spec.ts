import { TestBed } from '@angular/core/testing';

import { Enrollment4Service } from './enrollment4.service';

describe('EnrollmentService', () => {
  let service: Enrollment4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Enrollment4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
export { Enrollment4Service};
