import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewMaterialComponent } from './view-material.component';
import { MaterialService } from 'src/app/services/material.service';
import { CourseService } from 'src/app/services/course.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';


class MockMaterialService {
  getMaterialsByCourseId(courseId: string) {
    return of([]);
  }

  deleteMaterial(materialId: string) {
    return of({ status: 200 });
  }
}

class MockCourseService {
  getAllCourses() {
    return of({ data: [] });
  }
}

describe('ViewMaterialComponent', () => {
  let component: ViewMaterialComponent;
  let fixture: ComponentFixture<ViewMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMaterialComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        { provide: MaterialService, useClass: MockMaterialService },
        { provide: CourseService, useClass: MockCourseService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_should_create_view_material_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_check_if_the_heading_materials_exists_in_view_material_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Materials');
  });

  fit('Frontend_should_check_if_the_table_headers_exist_in_view_material_component', () => {
    const headers = ['SNo', 'Course Title', 'Material Title', 'Material Description', 'Content Type', 'Upload Date', 'Action'];
    const compiled = fixture.nativeElement;
    headers.forEach(header => {
      expect(compiled.textContent).toContain(header);
    });
  });

  fit('Frontend_should_check_if_no_records_found_message_is_displayed_in_view_material_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('No data found');
  });
});
