import { Component, effect, ElementRef, inject, Input, signal, ViewChild, WritableSignal } from '@angular/core';
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

  @ViewChild('program') private programRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  ngAfterViewInit() {
    this.item = this.programRef.nativeElement;
  }

  isProgramFocused: WritableSignal<boolean> = signal(false);

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
   */
  public clickHandler(event: MouseEvent): void {
    event?.stopPropagation();

    if (this.store.focus() == this.focusName) {
      this.store.focus.set('');
    } else {
      this.store.focus.set(this.focusName);
    }
  }
}
