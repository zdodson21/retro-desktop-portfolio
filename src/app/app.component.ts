import { Component } from '@angular/core';
import { TaskbarBaseComponent } from "../components/taskbar-base/taskbar-base.component";

@Component({
  selector: 'app-root',
  imports: [TaskbarBaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'retro-desktop-portfolio';
}
