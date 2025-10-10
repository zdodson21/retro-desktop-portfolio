import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../../app/app.service';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'alert-shutdown',
  imports: [WindowFrameComponent, FormsModule],
  templateUrl: './alert-shutdown.component.html',
  styleUrl: './alert-shutdown.component.scss',
})
export class AlertShutdownComponent {
  private store: AppService = inject(AppService);
  protected formValue: number = 0; // 0 = shutdown, 1 = restart

  constructor() {
    effect(() => {
      if (this.store.focus() === 'shutdown-alert') this.formValue = 0;
    });
  }

  /**
   * @description handles form submission, overriding default behavior
   */
  protected formSubmit(event: SubmitEvent): void {
    event.preventDefault();

    switch (this.formValue) {
      case 0:
        this.store.desktopMode.set(1);
        break;
      case 1:
        globalThis.location.href = this.store.webAddress;
        break;
      // TODO uncomment below when ready to integrate MSDOS-Prompt mode
      // case 2:
      //   this.store.desktopMode.set(2)
      //   break;
    }

    this.dismissAlert();
  }

  /**
   * @description provides functionality to "no" button
   */
  protected noButtonHelper(event: MouseEvent): void {
    event?.stopPropagation();
    this.dismissAlert();
  }

  /**
   * @description dismisses alert by removing focus
   */
  protected dismissAlert(): void {
    this.store.focus.set('');
  }
}
