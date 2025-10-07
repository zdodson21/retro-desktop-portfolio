import { Component, inject } from '@angular/core';
import { InternetExplorerService } from '../../internet-explorer.service';

@Component({
  selector: 'close-sidebar-button',
  imports: [],
  templateUrl: './close-sidebar-button.component.html',
  styleUrl: './close-sidebar-button.component.scss',
})
export class CloseSidebarButtonComponent {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
