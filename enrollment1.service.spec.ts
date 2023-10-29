import { TestBed } from '@angular/core/testing';

import { Enrollment1Service } from './enrollment1.service';

describe('EnrollmentService', () => {
  let service: Enrollment1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Enrollment1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
export { Enrollment1Service};