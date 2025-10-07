import { Component, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'taskbar-start',
  imports: [],
  templateUrl: './taskbar-start.component.html',
  styleUrl: './taskbar-start.component.scss',
})
export class TaskbarStartComponent {
  protected store: AppService = inject(AppService);
  private previousFocus: string = this.store.focus();

  /**
   * @description Handles changing styles and other functionality of the start button.
   * @param event mouse click event
   */
  protected startButtonHandler(event: MouseEvent): void {
    event?.stopPropagation();

    if (!this.store.focus().includes('start-menu')) {
      this.previousFocus = this.store.focus();
      this.store.focus.set('start-menu');
    } else {
      this.store.focus.set(this.previousFocus);
    }
  }
}
