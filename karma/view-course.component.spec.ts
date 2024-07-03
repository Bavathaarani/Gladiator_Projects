import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewCourseComponent } from './view-course.component';
import { CourseService } from 'src/app/services/course.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';


class MockCourseService {
  getAllCourses(requestParams: any) {
    return of({
      data: [],
      total: 0
    });
  }

  deleteCourse(courseId: string) {
    return of({ status: 200 });
  }
}

describe('ViewCourseComponent', () => {
  let component: ViewCourseComponent;
  let fixture: ComponentFixture<ViewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCourseComponent],
      imports: [FormsModule, RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: CourseService, useClass: MockCourseService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_should_create_view_course_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_check_if_the_heading_courses_exists_in_view_course_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Courses');
  });

  fit('Frontend_should_check_if_the_table_headers_exist_in_view_course_component', () => {
    const headers = ['Title', 'Description', 'Start Date', 'End Date', 'Category', 'Level', 'Action'];
    const compiled = fixture.nativeElement;
    headers.forEach(header => {
      expect(compiled.textContent).toContain(header);
    });
  });

  fit('Frontend_should_check_if_no_records_found_message_is_displayed_in_view_course_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Oops! No records found');
  });
});
