import { Component, effect, ElementRef, inject, ViewChild, } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'taskbar-start',
  imports: [],
  templateUrl: './taskbar-start.component.html',
  styleUrl: './taskbar-start.component.scss'
})
export class TaskbarStartComponent {
  @ViewChild('startButton') startButtonRef!: ElementRef;

  private store = inject(AppService);
  private item: any;

  ngAfterViewInit() {
    this.item = this.startButtonRef.nativeElement;
  }

  constructor() {
    effect(() => {
      if (this.store.isStartMenuOpen()) {
        this.item.classList.add('active');
      }
      else {
        this.item.classList.remove('active');
      }
    })
  }

  /**
   * @description Handles changing styles and other functionality of the start button.
   */
  startButtonHandler(event: MouseEvent) {
    event?.stopPropagation();
    if (!this.store.isStartMenuOpen()) {
      this.store.isStartMenuOpen.set(true);
    }
    else {
      this.store.isStartMenuOpen.set(false);
    }
    const item = this.startButtonRef.nativeElement;
    this.store.focus.set(item)
  }
}
