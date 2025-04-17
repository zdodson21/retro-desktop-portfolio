import { Component, effect, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../../app/app.service';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'alert-shutdown',
  imports: [WindowFrameComponent, FormsModule],
  templateUrl: './alert-shutdown.component.html',
  styleUrl: './alert-shutdown.component.scss'
})
export class AlertShutdownComponent {

  private store: AppService = inject(AppService);
  formValue: number = 0; // 0 = shutdown, 1 = restart

  constructor() {
    effect(() => {
      if (this.store.showShutdownAlert() === true) this.formValue = 0;
    })
  }

  formSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (this.formValue === 0) {
      globalThis.location.href = "https://github.com/zdodson21?tab=repositories"
    } else {
      globalThis.location.href = `${globalThis.location.protocol}//${globalThis.location.host}`
    }

    this.store.showShutdownAlert.set(false);
  }

  noButtonPressed() {
    this.store.showShutdownAlert.set(false);
  }
}
