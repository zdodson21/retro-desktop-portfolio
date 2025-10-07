import { Component } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { IeRouteComponent } from '../components/ie-route/ie-route.component';

@Component({
  selector: 'about-me',
  imports: [AIeComponent, IeRouteComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeSite {}
