import { TestBed } from '@angular/core/testing';

import { Enrollment2Service } from './enrollment2.service';

describe('EnrollmentService', () => {
  let service: Enrollment2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Enrollment2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
export { Enrollment2Service};