import { Component, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../../app/app.service';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'alert-shutdown',
  imports: [WindowFrameComponent, FormsModule],
  templateUrl: './alert-shutdown.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './alert-shutdown.component.scss',
})
export class AlertShutdownComponent {
  private store: AppService = inject(AppService);
  private systemService: SystemService = inject(SystemService);

  protected formValue_e = {
    SHUTDOWN: 0,
    RESTART: 1,
    MSDOS: 2,
  }
  protected formValue: number = this.formValue_e.SHUTDOWN;

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
      case this.formValue_e.SHUTDOWN:
        this.store.desktopMode.set(this.store.desktop_e.SHUTDOWN);
        break;

      case this.formValue_e.RESTART:
        globalThis.location.href = this.systemService.webAddress;
        break;

      // TODO uncomment below when ready to integrate MSDOS-Prompt mode
      // case this.formValue_e.MSDOS:
      //   this.store.desktopMode.set(this.store.desktop_e.MSDOS)
      //   break;

      default:
        break;
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
