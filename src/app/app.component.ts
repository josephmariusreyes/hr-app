import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { SharedModule } from './features/shared/shared.module';
import { initUser } from './core/state/user/user.action';
import { IUser } from './core/models/user.model';
import { selectCurrentUser } from './core/state/user';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, SharedModule, CommonModule]
})
export class AppComponent implements OnInit, OnDestroy {
  currentUser$ = signal<IUser | null>(null);
  title = 'hr-app';
  private destroy$ = new Subject<void>();

  constructor(private store: Store) {
    // Subscribe to user changes and update the signal
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.currentUser$.set(user);
      });
  }

  ngOnInit(): void {
    // Initialize user from localStorage
    this.store.dispatch(initUser());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get containerClasses() {
    return {
      'app-body-container-logged-out': this.currentUser$() === null,
      'app-body-container-logged-in': this.currentUser$() !== null 
    };
  }
}
