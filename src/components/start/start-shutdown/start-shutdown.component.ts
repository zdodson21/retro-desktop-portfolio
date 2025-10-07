import { Component, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'start-shutdown',
  imports: [],
  templateUrl: './start-shutdown.component.html',
  styleUrl: './start-shutdown.component.scss',
})
export class StartShutdownComponent {
  private store: AppService = inject(AppService);

  /**
   * @description shows shutdown alert
   * @param event mouse click event
   */
  protected clickHandler(event: MouseEvent): void {
    event?.stopPropagation();
    this.store.focus.set('shutdown-alert');
  }
}
