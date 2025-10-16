import { Component, inject } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { IeRouteComponent } from '../components/ie-route/ie-route.component';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'calculator-site',
  imports: [AIeComponent, IeRouteComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorSiteComponent {
  protected systemService: SystemService = inject(SystemService);
}
