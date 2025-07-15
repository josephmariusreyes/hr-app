import { Component } from '@angular/core';
import { SharedDialogComponent } from '../../../shared/shared-dialog/shared-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
  ,standalone: true
  ,imports: [CommonModule, SharedDialogComponent]
})
export class AttendanceComponent {
  showDialog = false;
}
