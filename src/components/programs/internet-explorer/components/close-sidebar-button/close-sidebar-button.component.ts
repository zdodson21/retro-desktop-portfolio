import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { InternetExplorerService } from '../../internet-explorer.service';

@Component({
  selector: 'close-sidebar-button',
  imports: [],
  templateUrl: './close-sidebar-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './close-sidebar-button.component.scss',
})
export class CloseSidebarButtonComponent {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
