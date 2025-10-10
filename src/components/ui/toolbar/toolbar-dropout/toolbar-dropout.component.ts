import { Component, inject, Input } from '@angular/core';
import { AppService } from '../../../../app/app.service';

@Component({
  selector: 'toolbar-dropout',
  imports: [],
  templateUrl: './toolbar-dropout.component.html',
  styleUrl: './toolbar-dropout.component.scss',
})
export class ToolbarDropoutComponent {
  @Input({ alias: 'text' }) public text: string;
  protected isHovered: boolean = false;
  private store: AppService = inject(AppService);

  /**
   * @description Support for touch inputs
   */
  protected touchSupport(event: MouseEvent) {
    event?.stopPropagation();
    if (this.store.isMobile()) this.isHovered = !this.isHovered;
  }
}
