import { Component, inject } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { IeRouteComponent } from '../components/ie-route/ie-route.component';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'gjallarhorn',
  imports: [
    AIeComponent,
    // IeRouteComponent,
  ],
  templateUrl: './gjallarhorn.component.html',
  styleUrl: './gjallarhorn.component.scss',
})
export class GjallarhornSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
