import { Component, signal, WritableSignal } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { HelpButtonComponent } from '../../ui/help-button/help-button.component';

@Component({
  selector: 'windows-help',
  imports: [WindowFrameComponent, HelpButtonComponent],
  templateUrl: './windows-help.component.html',
  styleUrl: './windows-help.component.scss',
})
export class WindowsHelpComponent {
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
