import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EnrolledCourseComponent } from './enrolled-course.component';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';



class MockEnrollmentService {
  getEnrollmentsByUserId(userId: string) {
    return of([]);
  }

  deleteEnrollment(courseId: string) {
    return of({ status: 200 });
  }
}

describe('EnrolledCourseComponent', () => {
  let component: EnrolledCourseComponent;
  let fixture: ComponentFixture<EnrolledCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrolledCourseComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      providers: [{ provide: EnrollmentService, useClass: MockEnrollmentService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_should_create_enrolled_course_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_check_if_the_heading_enrolled_courses_exists_in_enrolled_course_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Enrolled Courses');
  });

});
