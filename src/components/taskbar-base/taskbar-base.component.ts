import { Component } from '@angular/core';
import { TaskbarClockComponent } from '../taskbar-clock/taskbar-clock.component';
import { TaskbarStartComponent } from '../taskbar-start/taskbar-start.component';

@Component({
  selector: 'taskbar-base',
  imports: [TaskbarClockComponent, TaskbarStartComponent],
  templateUrl: './taskbar-base.component.html',
  styleUrl: './taskbar-base.component.scss'
})
export class TaskbarBaseComponent {

}
