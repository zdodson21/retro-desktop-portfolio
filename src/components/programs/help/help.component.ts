import { Component, signal, WritableSignal } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { HelpButtonComponent } from './components/help-button/help-button.component';

@Component({
  selector: 'help', // TODO change to just "help"
  imports: [WindowFrameComponent, HelpButtonComponent],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss',
})
export class HelpComponent {
  public currentTopic: WritableSignal<number> = signal(0);

  /**
   * @description set currentTopic to change displayed information
   * @param num Number tip from top to bottom, starting with 0
   */
  public setCurrentTopic(num: number) {
    if (this.currentTopic() !== num) {
      this.currentTopic.set(num);
    }
  }
}
