import { Component, OnInit } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss'],
  standalone: true,
  imports: [DialogModule]
})
export class SharedDialogComponent implements OnInit {
  display: boolean = false;

  ngOnInit(): void {
    this.display = true;
  }
}
