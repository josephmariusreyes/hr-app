import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone:false
})
export class LoginComponent {
  username = '';
  password = '';

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add login logic here
  }
}
