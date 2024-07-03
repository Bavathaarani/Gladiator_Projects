import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  fit('Frontend_should_create_employee_service', () => {
    expect(service).toBeTruthy();
  });
});
