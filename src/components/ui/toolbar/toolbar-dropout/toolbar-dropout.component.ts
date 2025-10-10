import { Component, inject, Input } from '@angular/core';
import { SystemService } from '../../../../services/system/system.service';

@Component({
  selector: 'toolbar-dropout',
  imports: [],
  templateUrl: './toolbar-dropout.component.html',
  styleUrl: './toolbar-dropout.component.scss',
})
export class ToolbarDropoutComponent {
  @Input({ alias: 'text' }) public text: string;
  protected isHovered: boolean = false;
  private systemService: SystemService = inject(SystemService);

  /**
   * @description Support for touch inputs
   */
  protected touchSupport(event: MouseEvent) {
    event?.stopPropagation();
    if (this.systemService.isMobile()) this.isHovered = !this.isHovered;
  }
}
