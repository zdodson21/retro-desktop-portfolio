import { Component, ElementRef, inject, ViewChild, } from '@angular/core';
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

  /**
   * @description Handles changing styles and other functionality of the start button.
   */
  startButtonHandler() {
    const button = this.startButtonRef.nativeElement;

    if (!this.store.isStartMenuOpen()) {
      button.classList.add('active');
      this.store.isStartMenuOpen.set(true);
      console.log(this.store.isStartMenuOpen());
    }
    else {
      button.classList.remove('active');
      this.store.isStartMenuOpen.set(false);
      console.log(this.store.isStartMenuOpen());
    }
  }
}
