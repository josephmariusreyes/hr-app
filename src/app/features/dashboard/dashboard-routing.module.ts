import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLandingComponent } from './containers/dashboard-landing/dashboard-landing.component';
import { AttendanceComponent } from './containers/attendance/attendance.component';
import { RequestsComponent } from './containers/requests/requests.component';
import { PayslipsComponent } from './containers/payslips/payslips.component';
import { ProfileComponent } from './containers/profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardLandingComponent },
  { path: 'attendance', component: AttendanceComponent }
  // { path: 'requests', component: RequestsComponent },
  // { path: 'payslips', component: PayslipsComponent },
  // { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
