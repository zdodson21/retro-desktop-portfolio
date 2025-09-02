import {
  Component,
  effect,
  HostListener,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { AlertShutdownComponent } from '../components/alerts/alert-shutdown/alert-shutdown.component';
import { DesktopEnvironmentComponent } from '../components/desktop/desktop-environment/desktop-environment.component';
import { SystemMonitorComponent } from '../components/programs/system-monitor/system-monitor.component';
import { StartMenuComponent } from '../components/start/start-menu/start-menu.component';
import { TaskbarBaseComponent } from '../components/taskbar/taskbar-base/taskbar-base.component';
import { AppService } from './app.service';

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
