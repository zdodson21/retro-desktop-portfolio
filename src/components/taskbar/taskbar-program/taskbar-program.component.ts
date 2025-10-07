import { Component, effect, inject, Input, signal, WritableSignal } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'taskbar-program',
  imports: [],
  templateUrl: './taskbar-program.component.html',
  styleUrl: './taskbar-program.component.scss',
})
export class TaskbarProgramComponent {
  @Input({ alias: 'focus-name' }) public focusName: string;
  @Input({ alias: 'icon' }) public src: string;
  @Input({ alias: 'program-name' }) public programName: string;

  private store: AppService = inject(AppService);

  protected isProgramFocused: WritableSignal<boolean> = signal(false);

  constructor() {
    effect(() => {
      if (this.store.focus() == this.focusName) {
        this.isProgramFocused.set(true);
      } else {
        this.isProgramFocused.set(false);
      }
    });
  }

  /**
   * @description taskbar-program click handling
   * @param event mouse click event
   */
  protected clickHandler(event: MouseEvent): void {
    event?.stopPropagation();

    if (this.store.focus() == this.focusName) {
      this.store.focus.set('');
    } else {
      this.store.focus.set(this.focusName);
    }
  }
}
