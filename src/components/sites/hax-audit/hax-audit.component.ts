import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'hax-audit',
  imports: [AIeComponent],
  templateUrl: './hax-audit.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hax-audit.component.scss',
})
export class HaxAuditSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
