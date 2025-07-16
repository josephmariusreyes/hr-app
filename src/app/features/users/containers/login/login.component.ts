import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createLoginFormGroup } from '../../../../core/helpers/form-helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone:false
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = createLoginFormGroup(this.fb);
  }

  login() {
    if (this.loginForm.valid) {
      alert('Call login API');
      // Here you would call your login API
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
