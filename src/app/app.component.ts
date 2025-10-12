import { Component, effect, HostListener, inject } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { AlertShutdownComponent } from '../components/alerts/alert-shutdown/alert-shutdown.component';
import { DesktopEnvironmentComponent } from '../components/desktop/desktop-environment/desktop-environment.component';
import { ShutdownScreenComponent } from '../components/desktop/shutdown-screen/shutdown-screen.component';
import { MsdosPromptComponent } from '../components/programs/msdos-prompt/msdos-prompt.component';
import { StartMenuComponent } from '../components/start/start-menu/start-menu.component';
import { TaskbarBaseComponent } from '../components/taskbar/taskbar-base/taskbar-base.component';
import { SystemService } from '../services/system/system.service';
import { AppService } from './app.service';

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

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    let openWelcome: string | null = localStorage.getItem(this.systemService.localStorageValues[0]);
    setTimeout(() => {
      const CURRENT_PARAMS: Params = { ...this.route.snapshot.queryParams }
      if (Object.keys(CURRENT_PARAMS).length === 0 && (openWelcome === null || openWelcome === "yes")) {
        this.router.navigate(['programs'], {
          relativeTo: this.route,
          queryParams: {welcome: ''},
          replaceUrl: true,
        });
      }
    }, 1000);
  }

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
