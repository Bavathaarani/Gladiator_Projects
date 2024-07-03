import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EnrollRequestsComponent } from './enroll-requests.component';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';


class MockEnrollmentService {
  getAllEnrollments() {
    return of([]);
  }

  getAllCourses() {
    return of({ data: [] });
  }

  updateEnrollment(id: string, status: string) {
    return of({ status: 200 });
  }
}

describe('EnrollRequestsComponent', () => {
  let component: EnrollRequestsComponent;
  let fixture: ComponentFixture<EnrollRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrollRequestsComponent],
      imports: [FormsModule, RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: EnrollmentService, useClass: MockEnrollmentService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_should_create_enroll_requests_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_check_if_the_heading_enrollment_requests_for_approval_exists_in_enroll_requests_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Enrollment Requests for Approval');
  });

  fit('Frontend_should_check_if_the_table_headers_exist_in_enroll_requests_component', () => {
    const headers = ['SNo', 'Course Name', 'Description', 'Submission Date', 'Status', 'Action'];
    const compiled = fixture.nativeElement;
    headers.forEach(header => {
      expect(compiled.textContent).toContain(header);
    });
  });

  fit('Frontend_should_check_if_no_records_found_message_is_displayed_in_enroll_requests_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('No data found');
  });

});
