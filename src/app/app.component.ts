import { Component, signal } from '@angular/core';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { DesktopEnvironmentComponent } from '../components/desktop/desktop-environment/desktop-environment.component';
import { StartMenuComponent } from '../components/start/start-menu/start-menu.component';
import { TaskbarBaseComponent } from "../components/taskbar/taskbar-base/taskbar-base.component";

inject();
injectSpeedInsights();

@Component({
  selector: 'app-root',
  imports: [TaskbarBaseComponent, DesktopEnvironmentComponent, StartMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
