import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskbarBaseComponent } from "../components/taskbar-base/taskbar-base.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskbarBaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'retro-desktop-portfolio';
}
