
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentUser } from '../../../../core/state/user/user.selectors';
import { IUser } from '../../../../core/models/user.model';

interface DashboardCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
  badge?: number;
}

@Component({
  selector: 'app-dashboard-landing',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLandingComponent implements OnInit {
  currentUser$: Observable<IUser | null>;
  isLoading = false;

  dashboardCards: DashboardCard[] = [
    {
      id: 'attendance',
      title: 'Attendance',
      description: 'View and manage your attendance records',
      icon: 'pi pi-calendar',
      route: 'attendance',
      color: 'blue',
      badge: 0
    },
    {
      id: 'requests',
      title: 'Requests',
      description: 'Submit and track leave requests',
      icon: 'pi pi-file-edit',
      route: 'requests',
      color: 'green',
      badge: 2
    },
    {
      id: 'payslips',
      title: 'Payslips',
      description: 'Access your salary and payment history',
      icon: 'pi pi-money-bill',
      route: 'payslips',
      color: 'orange'
    },
    {
      id: 'profile',
      title: 'Profile',
      description: 'Update your personal information',
      icon: 'pi pi-user',
      route: 'profile',
      color: 'purple'
    }
  ];

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.currentUser$ = this.store.select(selectCurrentUser);
  }

  ngOnInit(): void {
    // Load user-specific dashboard data
    this.loadDashboardData();
  }

  navigateTo(route: string): void {
    this.isLoading = true;
    this.router.navigate([`dashboard/${route}`]).finally(() => {
      this.isLoading = false;
    });
  }

  onCardKeyPress(event: KeyboardEvent, route: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.navigateTo(route);
    }
  }

  private loadDashboardData(): void {
    // TODO: Load user-specific data like pending requests count, recent attendance, etc.
    // This would typically come from services
  }

  trackByCardId(index: number, card: DashboardCard): string {
    return card.id;
  }
}
