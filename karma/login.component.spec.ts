import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


class MockAuthService {
  login(request: any) {
    return of({ token: 'dummyToken', role: 'Employee', id: '1', userName: 'John Doe' });
  }
  setUserInfo(userData: any) { }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, RouterTestingModule, ReactiveFormsModule,HttpClientTestingModule ],
      providers: [ { provide: AuthService, useClass: MockAuthService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Frontend_should_create_login_component', () => {
    expect(component).toBeTruthy();
  });

  fit('Frontend_should_check_if_the_Login_word_exists_in_login_component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Login');
  });

  fit('Frontend_should_check_input_types_in_login_component', () => {
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]')).nativeElement;
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]')).nativeElement;
    
    expect(emailInput.type).toBe('email');
    expect(passwordInput.type).toBe('password');
  });

});
