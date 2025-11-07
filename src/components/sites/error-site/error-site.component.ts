import { Component, inject } from '@angular/core';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'error-site',
  imports: [],
  templateUrl: './error-site.component.html',
  styleUrl: './error-site.component.scss',
})
export class ErrorSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
