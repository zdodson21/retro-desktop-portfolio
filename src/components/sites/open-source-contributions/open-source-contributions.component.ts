import { Component, inject } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { IeRouteComponent } from '../components/ie-route/ie-route.component';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'open-source-contributions',
  imports: [AIeComponent, IeRouteComponent],
  templateUrl: './open-source-contributions.component.html',
  styleUrl: './open-source-contributions.component.scss',
})
export class OpenSourceContributionsSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
