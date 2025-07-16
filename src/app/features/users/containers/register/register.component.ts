
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../../core/models/user.model';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../../core/state/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createRegisterFormGroup } from '../../../../core/helpers/form-helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: false
})
export class RegisterComponent {
  currentUser$: Observable<IUser | null>;
  registerForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {
    this.currentUser$ = this.store.select(selectCurrentUser);
    this.registerForm = createRegisterFormGroup(this.fb);
  }

  register() {
    if (this.registerForm.valid) {
      // handle registration logic here
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
