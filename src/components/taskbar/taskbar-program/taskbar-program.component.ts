import { Component, effect, ElementRef, inject, Input, ViewChild, signal } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'taskbar-program',
  imports: [],
  templateUrl: './taskbar-program.component.html',
  styleUrl: './taskbar-program.component.scss'
})
export class TaskbarProgramComponent {
  @Input({alias: 'focus-name'}) focusName: string;
  @Input({alias: 'icon'}) src: string;
  @Input({alias: 'text'}) text: string;

  @ViewChild('program') programRef!: ElementRef;

  private store = inject(AppService);
  private item: any;

  ngAfterViewInit() {
    this.item = this.programRef.nativeElement;
  }

  isProgramFocused = signal(false);

  constructor() {
    effect(() => {
      if (this.store.focus() == this.focusName) {
        this.isProgramFocused.set(true);
      }
      else {
        this.isProgramFocused.set(false);
      }
    })
  }

  clickHandler(event: MouseEvent) {
    event?.stopPropagation();

    if (this.store.focus() == this.focusName) {
      this.store.focus.set('');
    }
    else {
      this.store.focus.set(this.focusName);
    }

    this.store.isStartMenuOpen.set(false);
  }
}
