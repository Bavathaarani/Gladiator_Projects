import { TestBed } from '@angular/core/testing';

import { EnrollmentService } from './enrollment.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EnrollmentService', () => {
  let service: EnrollmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EnrollmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  fit('Frontend_should_create_enrollment_service', () => {
    expect(service).toBeTruthy();
  });
});
