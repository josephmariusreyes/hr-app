import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../../core/models/user.model';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../../core/state/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone:false
})
export class RegisterComponent {

  currentUser$: Observable<IUser | null>;

  constructor(private store: Store) {
    this.currentUser$ = this.store.select(selectCurrentUser);

    debugger;
  }
}
