import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    CardModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class UsersModule { }
