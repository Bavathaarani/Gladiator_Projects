import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseFormComponent } from './course-form.component';
import { CourseService } from 'src/app/services/course.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockCourseService {
  getCourseById(id: string) {
    return of({
      title: 'Test Course',
      description: 'Test Description',
      courseStartDate: '2023-01-01',
      courseEndDate: '2023-12-31',
      category: 'Test Category',
      level: 'Beginner'
    });
  }

  addCourse(course: any) {
    return of({ status: 200 });
  }

  updateCourse(id: string, course: any) {
    return of({ status: 200 });
  }
}

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseFormComponent],
      imports: [FormsModule, RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: CourseService, useClass: MockCourseService },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => null } } }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_should_create_course_form_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_check_if_the_title_course_form_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Title');
  });

  fit('Frontend_should_check_if_the_Title_label_exists_course_form_component', () => {
    const label = fixture.debugElement.query(By.css('label'));
    expect(label).toBeTruthy();
  });

});
