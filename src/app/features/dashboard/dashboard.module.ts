import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DashboardLandingComponent } from "./containers/dashboard-landing/dashboard-landing.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CardModule } from "primeng/card";

import { TableModule } from "primeng/table";
import { SharedDialogComponent } from "../shared/shared-dialog/shared-dialog.component";
import { AttendanceComponent } from "./containers/attendance/attendance.component";
import { UsersRoutingModule } from "../users/users-routing.module";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    DashboardLandingComponent,
    AttendanceComponent
  ],
  imports: [
    CardModule,
    RouterModule,
    UsersRoutingModule,
    TableModule,
    CommonModule,
    DashboardRoutingModule,
    SharedDialogComponent,
    HttpClientModule
  ],
  exports: []
})
export class DashboardModule {}
