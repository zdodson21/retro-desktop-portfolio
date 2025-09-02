import {
  Component,
  effect,
  HostListener,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { inject as vercelAnalytics } from '@vercel/analytics';
import { injectSpeedInsights as vercelSpeedInsights } from '@vercel/speed-insights';
import { AlertShutdownComponent } from '../components/alerts/alert-shutdown/alert-shutdown.component';
import { DesktopEnvironmentComponent } from '../components/desktop/desktop-environment/desktop-environment.component';
import { SystemMonitorComponent } from '../components/programs/system-monitor/system-monitor.component';
import { StartMenuComponent } from '../components/start/start-menu/start-menu.component';
import { TaskbarBaseComponent } from '../components/taskbar/taskbar-base/taskbar-base.component';
import { AppService } from './app.service';
import { environment } from '../environments/environment.development';

if (environment.production) {
  // TODO these might need fixed, should monitor. This is needed for testing though.
  // Mainly just need to monitor if it is being build properly for production.
  // Look into how to make sure angular and vercel knows to build in prod
  vercelAnalytics();
  vercelSpeedInsights();
}

@Component({
  selector: 'app-root',
  imports: [
    AlertShutdownComponent,
    TaskbarBaseComponent,
    DesktopEnvironmentComponent,
    StartMenuComponent,
    SystemMonitorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private store: AppService = inject(AppService);

  public isAlertVisible: WritableSignal<boolean> = signal(false);

  constructor() {
    effect(() => {
      this.isAlertVisible.set(this.store.showShutdownAlert());
    });
  }

  /**
   * @description Sets viewport dimension variables for live
   *              updating on window dimension changes.
   */
  @HostListener('window:resize')
  private onResize() {
    this.store.viewportWidth.set(globalThis.innerWidth);
    this.store.viewportHeight.set(globalThis.innerHeight);
  }
}
