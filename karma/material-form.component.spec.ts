import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialFormComponent } from './material-form.component';
import { MaterialService } from 'src/app/services/material.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';


class MockMaterialService {
  getMaterialById(id: string) {
    return of({
      title: 'Test Material',
      description: 'Test Description',
      url: 'http://test.com',
      contentType: 'PDF',
      file: 'test-file-content'
    });
  }

  addMaterial(material: any) {
    return of({ status: 200 });
  }

  updateMaterial(id: string, material: any) {
    return of({ status: 200 });
  }
}

describe('MaterialFormComponent', () => {
  let component: MaterialFormComponent;
  let fixture: ComponentFixture<MaterialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialFormComponent],
      imports: [FormsModule, RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: MaterialService, useClass: MockMaterialService },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => null } } }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_should_create_material_form_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_check_if_the_title_exists_in_material_form_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Title:');
  });

  fit('Frontend_should_check_if_the_Title_input_field_exists_material_form_component', () => {
    const label = fixture.debugElement.query(By.css('label'));
    expect(label).toBeTruthy();
  });

});
