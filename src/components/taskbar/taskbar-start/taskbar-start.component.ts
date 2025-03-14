import { Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'taskbar-start',
  imports: [],
  templateUrl: './taskbar-start.component.html',
  styleUrl: './taskbar-start.component.scss'
})
export class TaskbarStartComponent {
  @ViewChild('startButton') startButtonRef!: ElementRef;
  clicked: boolean = false;

  /**
   * @description Handles changing styles and other functionality of the start button.
   */
  startButtonHandler() {
    const button = this.startButtonRef.nativeElement;

    if (!this.clicked) {
      button.classList.add('active');
    }
    else {
      button.classList.remove('active');
    }

    this.clicked = !this.clicked;
  }
}
