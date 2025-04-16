import { Component, effect, ElementRef, inject, ViewChild, signal} from '@angular/core';
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

  isStartClicked = signal(false);

  ngAfterViewInit() {
    this.item = this.startButtonRef.nativeElement.classList;
  }

  constructor() {
    effect(() => {
      this.isStartClicked.set(this.store.isStartMenuOpen());
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
    this.store.focus.set("start")
  }
}
