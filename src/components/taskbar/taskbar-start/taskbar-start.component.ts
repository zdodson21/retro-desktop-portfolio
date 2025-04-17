import { Component, effect, ElementRef, inject, ViewChild, signal, WritableSignal} from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'taskbar-start',
  imports: [],
  templateUrl: './taskbar-start.component.html',
  styleUrl: './taskbar-start.component.scss'
})
export class TaskbarStartComponent {
  @ViewChild('startButton') startButtonRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  // TODO change to be set based on
  previousFocus: string = this.store.focus();
  isStartClicked: WritableSignal<boolean> = signal(false);

  ngAfterViewInit() {
    this.item = this.startButtonRef.nativeElement.classList;
  }

  constructor() {
    effect(() => {
      this.isStartClicked.set(this.store.focus() === "start-menu");
    })
  }

  /**
   * @description Handles changing styles and other functionality of the start button.
   */
  startButtonHandler(event: MouseEvent) {
    event?.stopPropagation();
    
    if (!this.isStartClicked()) {
      this.previousFocus = this.store.focus();
      this.store.focus.set("start-menu");
    }
    else {
      this.store.focus.set(this.previousFocus);
    }
  }
}
