import { Component } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'taskbar-properties',
  imports: [WindowFrameComponent],
  templateUrl: './taskbar-properties.component.html',
  styleUrl: './taskbar-properties.component.scss',
})
export class TaskbarPropertiesComponent {}
