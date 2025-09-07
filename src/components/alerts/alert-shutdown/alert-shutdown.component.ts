import {
  Component,
  effect,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
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
  public formValue: number = 0; // 0 = shutdown, 1 = restart

  constructor() {
    effect(() => {
      if (this.store.focus() === 'shutdown-alert') this.formValue = 0;
    });
  }

  /**
   * @description handles form submission, overriding default behavior
   */
  public formSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (this.formValue === 0) {
      globalThis.location.href =
        'https://github.com/zdodson21?tab=repositories';
    } else {
      globalThis.location.href = `${globalThis.location.protocol}//${globalThis.location.host}`;
    }

    this.dismissAlert();
  }

  /**
   * @description provides functionality to "no" button
   */
  public noButtonHelper(event: MouseEvent) {
    event?.stopPropagation();
    this.dismissAlert();
  }

  /**
   * @description dismisses alert by removing focus
   */
  public dismissAlert() {
    this.store.focus.set('');
  }
}
