import { Component, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { TaskbarClockComponent } from '../taskbar-clock/taskbar-clock.component';
import { TaskbarProgramComponent } from '../taskbar-program/taskbar-program.component';
import { TaskbarStartComponent } from '../taskbar-start/taskbar-start.component';
import { WindowService } from '../../../services/window/window.service';

@Component({
  selector: 'taskbar-base',
  imports: [TaskbarClockComponent, TaskbarProgramComponent, TaskbarStartComponent],
  templateUrl: './taskbar-base.component.html',
  styleUrl: './taskbar-base.component.scss',
})
export class TaskbarBaseComponent {
  private store: AppService = inject(AppService);
  protected windowService: WindowService = inject(WindowService);

  /**
   * @description sets focus to taskbar base
   * @param event mouse click event
   */
  protected clickHandler(event: MouseEvent): void {
    event?.stopPropagation();
    this.store.focus.set('taskbar-base');
  }
}
