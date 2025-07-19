
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-landing',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.scss'],
  standalone: false
})
export class DashboardLandingComponent implements OnInit {
  constructor(private router: Router) {}

  goToAttendance() {
    this.router.navigate(['dashboard/attendance']);
  }
  ngOnInit(): void {
    // Initialization logic here
    // Example: console.log('DashboardLandingComponent initialized');
  }
}
