import { Component, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'system-monitor',
  imports: [WindowFrameComponent, NgFor],
  templateUrl: './system-monitor.component.html',
  styleUrl: './system-monitor.component.scss'
})
export class SystemMonitorComponent {
  // TODO need to implement routes for this being open, then can replicate for other programs
  public store: AppService = inject(AppService);

  public openPrograms: any = this.store.openPrograms();
}
