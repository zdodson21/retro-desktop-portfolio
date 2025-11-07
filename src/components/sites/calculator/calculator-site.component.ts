import { Component, inject } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { SystemService } from '../../../services/system/system.service';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'calculator-site',
  imports: [AIeComponent],
  templateUrl: './calculator-site.component.html',
  styleUrl: './calculator-site.component.scss',
})
export class CalculatorSiteComponent {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);

  protected systemService: SystemService = inject(SystemService);
}
