import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { AlertShutdownComponent } from '../components/alerts/alert-shutdown/alert-shutdown.component';
import { DesktopEnvironmentComponent } from '../components/desktop/desktop-environment/desktop-environment.component';
import { ShutdownScreenComponent } from '../components/desktop/shutdown-screen/shutdown-screen.component';
import { InternetExplorerService } from '../components/programs/internet-explorer/internet-explorer.service';
import { MsdosPromptComponent } from '../components/programs/msdos-prompt/msdos-prompt.component';
import { AboutMeSite } from '../components/sites/about-me/about-me.component';
import { CalculatorSiteComponent } from '../components/sites/calculator/calculator-site.component';
import { ErrorSite } from '../components/sites/error-site/error-site.component';
import { HaxAuditSite } from '../components/sites/hax-audit/hax-audit.component';
import { HaxChatAgentSite } from '../components/sites/hax-chat-agent/hax-chat-agent.component';
import { OpenSourceContributionsSite } from '../components/sites/open-source-contributions/open-source-contributions.component';
import { RetroDesktopPortfolioSite } from '../components/sites/retro-desktop-portfolio/retro-desktop-portfolio.component';
import { SecretSite } from '../components/sites/secret-site/secret-site.component';
import { StartMenuComponent } from '../components/start/start-menu/start-menu.component';
import { TaskbarBaseComponent } from '../components/taskbar/taskbar-base/taskbar-base.component';
import { SettingsService } from '../services/settings/settings.service';
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
    AboutMeSite,
    CalculatorSiteComponent,
    ErrorSite,
    HaxAuditSite,
    HaxChatAgentSite,
    OpenSourceContributionsSite,
    RetroDesktopPortfolioSite,
    SecretSite,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected store: AppService = inject(AppService);
  private systemService: SystemService = inject(SystemService);
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
  private settings: SettingsService = inject(SettingsService);

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    let openWelcome: string | null = localStorage.getItem(this.settings.localStorageValues[0]);
    setTimeout(() => {
      const CURRENT_PARAMS: Params = { ...this.route.snapshot.queryParams };
      if (Object.keys(CURRENT_PARAMS).length === 0 && (openWelcome === null || openWelcome === 'yes')) {
        this.router.navigate(['programs'], {
          relativeTo: this.route,
          queryParams: { welcome: '' },
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
