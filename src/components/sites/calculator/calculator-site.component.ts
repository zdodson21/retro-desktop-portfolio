import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { SystemService } from '../../../services/system/system.service';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'calculator-site',
  imports: [AIeComponent],
  templateUrl: './calculator-site.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './calculator-site.component.scss',
})
export class CalculatorSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);

  protected systemService: SystemService = inject(SystemService);
}
