import { Component } from '@angular/core';
import { TaskbarBaseComponent } from "../components/taskbar/taskbar-base/taskbar-base.component";
import { DesktopEnvironmentComponent } from '../components/desktop/desktop-environment/desktop-environment.component';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights} from '@vercel/speed-insights'
import { StartMenuComponent } from '../components/start/start-menu/start-menu.component';


inject();
injectSpeedInsights();

@Component({
  selector: 'app-root',
  imports: [TaskbarBaseComponent, DesktopEnvironmentComponent, StartMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'retro-desktop-portfolio';
}
