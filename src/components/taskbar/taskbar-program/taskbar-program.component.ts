import { Component, effect, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'taskbar-program',
  imports: [],
  templateUrl: './taskbar-program.component.html',
  styleUrl: './taskbar-program.component.scss'
})
export class TaskbarProgramComponent {
  @Input({alias: 'icon'}) src: string;
  @Input({alias: 'text'}) text: string;

  @ViewChild('program') programRef!: ElementRef;

  private store = inject(AppService);
  private item: any;

  ngAfterViewInit() {
    this.item = this.programRef.nativeElement;
  }

  constructor() {
    effect(() => {
      if (this.store.focus() == this.item) {
        this.item.classList.add('active');
      }
      else {
        this.item.classList.remove('active');
      }
    })
  }

  clickHandler(event: MouseEvent) {
    event?.stopPropagation();

    if (this.store.focus() == this.item) {
      this.store.focus.set('');
    }
    else {
      this.store.focus.set(this.item);
    }

    this.store.isStartMenuOpen.set(false);
  }
}
