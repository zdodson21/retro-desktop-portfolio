import { Component } from '@angular/core';
import { TaskbarClockComponent } from '../taskbar-clock/taskbar-clock.component';

@Component({
  selector: 'taskbar-base',
  imports: [TaskbarClockComponent],
  templateUrl: './taskbar-base.component.html',
  styleUrl: './taskbar-base.component.scss'
})
export class TaskbarBaseComponent {

}
