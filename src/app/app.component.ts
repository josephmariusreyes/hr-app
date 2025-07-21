import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './features/shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, SharedModule]
})
export class AppComponent {
  title = 'hr-app';
}
