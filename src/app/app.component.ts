import { Component } from '@angular/core';
import { TaskbarBaseComponent } from "../components/taskbar/taskbar-base/taskbar-base.component";
import { DesktopEnvironmentComponent } from '../components/desktop/desktop-environment/desktop-environment.component';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights} from '@vercel/speed-insights'

inject();
injectSpeedInsights();

@Component({
  selector: 'app-root',
  imports: [TaskbarBaseComponent, DesktopEnvironmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'retro-desktop-portfolio';
}
