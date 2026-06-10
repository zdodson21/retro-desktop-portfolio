import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'py-weather',
  imports: [AIeComponent],
  templateUrl: './py-weather.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './py-weather.component.scss',
})
export class PyWeatherSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
