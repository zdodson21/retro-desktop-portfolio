import { Component, inject } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { SystemService } from '../../../services/system/system.service';
import { IeRouteComponent } from '../components/ie-route/ie-route.component';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'retro-desktop-portfolio',
  imports: [AIeComponent, IeRouteComponent],
  templateUrl: './retro-desktop-portfolio.component.html',
  styleUrl: './retro-desktop-portfolio.component.scss',
})
export class RetroDesktopPortfolioSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
  protected systemService: SystemService = inject(SystemService);
}
