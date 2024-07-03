import { TestBed } from '@angular/core/testing';

import { MaterialService } from './material.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MaterialService', () => {
  let service: MaterialService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MaterialService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  fit('Frontend_should_create_material_service', () => {
    expect(service).toBeTruthy();
  });
});
