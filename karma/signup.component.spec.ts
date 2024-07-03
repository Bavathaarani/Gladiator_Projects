import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { SignupComponent } from './signup.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockAuthService {
  register(request: any) {
    return of({ success: true });
  }
}

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ FormsModule, RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ { provide: AuthService, useClass: MockAuthService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_should_create_signup_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_check_if_the_Signup_word_exists_in_signup_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Signup');
  });

});
