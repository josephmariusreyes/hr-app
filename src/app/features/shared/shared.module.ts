import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { SharedDialogComponent } from './shared-dialog/shared-dialog.component';

@NgModule({
  declarations: [
    SharedHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedDialogComponent
  ],
  exports: [
    SharedHeaderComponent,
    SharedDialogComponent
  ]
})
export class SharedModule { }
