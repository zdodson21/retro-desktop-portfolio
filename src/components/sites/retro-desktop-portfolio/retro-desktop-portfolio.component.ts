import { Component, inject } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'retro-desktop-portfolio',
  imports: [AIeComponent],
  templateUrl: './retro-desktop-portfolio.component.html',
  styleUrl: './retro-desktop-portfolio.component.scss',
})
export class RetroDesktopPortfolioSite {
  protected systemService: SystemService = inject(SystemService);
}
