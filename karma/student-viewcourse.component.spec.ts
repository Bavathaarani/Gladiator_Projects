import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentViewcourseComponent } from './student-viewcourse.component';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { CourseService } from 'src/app/services/course.service';
import { MaterialService } from 'src/app/services/material.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockEnrollmentService {
  getEnrollmentsByUserId(userId: string) {
    return of([]);
  }

  addEnrollment(enrollmentData: any) {
    return of({ status: 200 });
  }
}

class MockCourseService {
  getAllCourses() {
    return of({ data: [] });
  }
}

class MockMaterialService {
  getMaterialsByCourseId(courseId: string) {
    return of([]);
  }
}

describe('StudentViewcourseComponent', () => {
  let component: StudentViewcourseComponent;
  let fixture: ComponentFixture<StudentViewcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentViewcourseComponent],
      imports: [FormsModule, RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: EnrollmentService, useClass: MockEnrollmentService },
        { provide: CourseService, useClass: MockCourseService },
        { provide: MaterialService, useClass: MockMaterialService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_should_create_student_viewcourse_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_check_if_the_heading_available_courses_exists_in_student_viewcourse_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Available Courses');
  });

  fit('Frontend_should_check_if_the_table_headers_exist_in_student_viewcourse_component', () => {
    const headers = ['S.No', 'Course Name', 'Course Description', 'Start Date', 'End Date', 'Action'];
    const compiled = fixture.nativeElement;
    headers.forEach(header => {
      expect(compiled.textContent).toContain(header);
    });
  });


});
