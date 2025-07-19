import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  standalone:false,
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  showDialog = false;
  attendanceRecords: any[] = [];
  loading = true;
  first = 0;
  rows = 5;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('attendance.json').subscribe(data => {
      this.attendanceRecords = data;
      this.loading = false;
    });
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
