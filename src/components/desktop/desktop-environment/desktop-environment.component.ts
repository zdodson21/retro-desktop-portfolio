import { Component, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { DesktopIconComponent } from '../desktop-icon/desktop-icon.component';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'desktop-environment',
  imports: [DesktopIconComponent],
  templateUrl: './desktop-environment.component.html',
  styleUrl: './desktop-environment.component.scss',
})
export class DesktopEnvironmentComponent {
  private store: AppService = inject(AppService);
  protected systemService: SystemService = inject(SystemService);

  /**
   * @description sets focus through click events
   */
  public clickHandler(event: MouseEvent): void {
    event?.stopPropagation();
    this.store.focus.set('desktop-environment');
  }
}
