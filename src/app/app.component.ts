import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertShutdownComponent } from '../components/alerts/alert-shutdown/alert-shutdown.component';
import { DesktopEnvironmentComponent } from '../components/desktop/desktop-environment/desktop-environment.component';
import { ShutdownScreenComponent } from '../components/desktop/shutdown-screen/shutdown-screen.component';
import { StartMenuComponent } from '../components/start/start-menu/start-menu.component';
import { TaskbarBaseComponent } from '../components/taskbar/taskbar-base/taskbar-base.component';
import { AppService } from './app.service';
import { MsdosPromptComponent } from '../components/programs/msdos-prompt/msdos-prompt.component';
import { SystemService } from '../services/system/system.service';

@Component({
  selector: 'app-root',
  imports: [
    AlertShutdownComponent,
    TaskbarBaseComponent,
    DesktopEnvironmentComponent,
    StartMenuComponent,
    RouterOutlet,
    ShutdownScreenComponent,
    MsdosPromptComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected store: AppService = inject(AppService);
  private systemService: SystemService = inject(SystemService);

  /**
   * @description Sets viewport dimension variables for live
   *              updating on window dimension changes.
   */
  @HostListener('window:resize')
  private onResize(): void {
    this.systemService.viewportWidth.set(globalThis.innerWidth);
    this.systemService.viewportHeight.set(globalThis.innerHeight);
  }
}
