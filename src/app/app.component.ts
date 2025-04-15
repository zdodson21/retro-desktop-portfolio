import { Component, ElementRef, ViewChild, inject, effect, signal } from '@angular/core';
import { inject as vercelAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { DesktopEnvironmentComponent } from '../components/desktop/desktop-environment/desktop-environment.component';
import { StartMenuComponent } from '../components/start/start-menu/start-menu.component';
import { TaskbarBaseComponent } from "../components/taskbar/taskbar-base/taskbar-base.component";
import { AlertShutdownComponent } from '../components/alerts/alert-shutdown/alert-shutdown.component';
import { AppService } from './app.service';
import { SystemMonitorComponent } from '../components/programs/system-monitor/system-monitor.component';

vercelAnalytics();
injectSpeedInsights();

@Component({
  selector: 'app-root',
  imports: [
    AlertShutdownComponent,
    TaskbarBaseComponent,
    DesktopEnvironmentComponent,
    StartMenuComponent,
    SystemMonitorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private store = inject(AppService);

  isAlertVisible = signal(false);

  constructor() {
    effect(() => {
      this.isAlertVisible.set(this.store.showShutdownAlert())
    })
  }
}
