import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUser } from '../../../core/models/user.model';
import { selectCurrentUser } from '../../../core/state/user/user.selectors';
import { logout } from '../../../core/state/user/user.action';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.scss',
  standalone: false
})
export class SharedHeaderComponent implements OnInit, OnDestroy {
  currentUser$: Observable<IUser | null>;
  
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.currentUser$ = this.store.select(selectCurrentUser);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onDocumentClick(event: Event): void {
  }

  logout(): void {
    // Dispatch logout action to NgRx store
    this.store.dispatch(logout());
    this.router.navigate(['/user/login']);
  }

}
