import { Component, inject } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { IeRouteComponent } from '../components/ie-route/ie-route.component';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';
import { CertBlockComponent } from '../components/cert-block/cert-block.component';

@Component({
  selector: 'about-me',
  imports: [AIeComponent, IeRouteComponent, CertBlockComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
