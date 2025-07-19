import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createLoginFormGroup } from '../../../../core/helpers/form-helpers';
import { UserService } from '../../../../core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService) 
  {
    this.loginForm = createLoginFormGroup(this.fb);
  }

  login() {
    if (this.loginForm.valid) {
      // Ensure username is correctly retrieved from the form
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.userService.login(username, password);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
