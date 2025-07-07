import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardLandingComponent } from "./containers/dashboard-landing/dashboard-landing.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [
    DashboardLandingComponent
  ],
  imports: [
    CardModule,
    CommonModule,
    DashboardRoutingModule
  ],
  exports: []
})
export class DashboardModule {}
