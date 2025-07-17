import { Routes } from '@angular/router';
import { hrisDashboardGuard } from '../core/guard/hris-routing.guard';

export const mainRoutes: Routes = [
  { 
    path: '', redirectTo: 'user/login', pathMatch: 'full' 
  },
  {
    path: 'user',
    loadChildren: () => import('../features/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [hrisDashboardGuard]
  }
];
