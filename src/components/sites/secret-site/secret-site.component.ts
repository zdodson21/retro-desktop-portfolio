import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'secret-site',
  imports: [],
  templateUrl: './secret-site.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './secret-site.component.scss',
})
export class SecretSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
