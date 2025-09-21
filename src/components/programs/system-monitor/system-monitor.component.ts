import { Component, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'system-monitor',
  imports: [WindowFrameComponent],
  templateUrl: './system-monitor.component.html',
  styleUrl: './system-monitor.component.scss',
})
export class SystemMonitorComponent {
  public store: AppService = inject(AppService);
}
