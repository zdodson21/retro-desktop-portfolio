import { Component, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../../app/app.service';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { SystemService } from '../../../services/system/system.service';
import { desktop_e } from '../../../app/enums/desktop.enum';
import { formValue_e } from './enum/form-value.enum';

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

  protected formValue: number = formValue_e.SHUTDOWN;
  protected htmlForm: typeof formValue_e = formValue_e;

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
      case formValue_e.SHUTDOWN:
        this.store.desktopMode.set(desktop_e.SHUTDOWN);
        break;

      case formValue_e.RESTART:
        globalThis.location.href = this.systemService.webAddress;
        break;

      // TODO uncomment below when ready to integrate MSDOS-Prompt mode
      // case formValue_e.MSDOS:
      //   this.store.desktopMode.set(desktop_e.MSDOS)
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
