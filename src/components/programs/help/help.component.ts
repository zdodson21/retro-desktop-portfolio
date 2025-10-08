import { Component, inject, signal, WritableSignal } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { HelpButtonComponent } from './components/help-button/help-button.component';
import { IeRouteComponent } from '../../sites/components/ie-route/ie-route.component';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'help',
  imports: [WindowFrameComponent, HelpButtonComponent, IeRouteComponent],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss',
})
export class HelpComponent {
  protected store: AppService = inject(AppService);
  protected currentTopic: WritableSignal<number> = signal(0);

  /**
   * @description set currentTopic to change displayed information
   * @param num Number tip from top to bottom, starting with 0
   */
  protected setCurrentTopic(num: number): void {
    if (this.currentTopic() !== num) {
      this.currentTopic.set(num);
    }
  }

  protected openIE(event: MouseEvent): void {
    event.stopPropagation();
    this.store.focus.set('internet-explorer');
  }
}
