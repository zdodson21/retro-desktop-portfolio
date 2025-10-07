import { Component } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { IeRouteComponent } from '../components/ie-route/ie-route.component';

@Component({
  selector: 'open-source-contributions',
  imports: [AIeComponent, IeRouteComponent],
  templateUrl: './open-source-contributions.component.html',
  styleUrl: './open-source-contributions.component.scss',
})
export class OpenSourceContributionsSite {}
