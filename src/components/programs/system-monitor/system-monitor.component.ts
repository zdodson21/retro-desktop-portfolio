import { Component, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { SystemService } from '../../../services/system/system.service';
import { WindowService } from '../../../services/window/window.service';
import { SettingsService } from '../../../services/settings/settings.service';

@Component({
  selector: 'system-monitor',
  imports: [WindowFrameComponent],
  templateUrl: './system-monitor.component.html',
  styleUrl: './system-monitor.component.scss',
})
export class SystemMonitorComponent {
  protected store: AppService = inject(AppService);
  protected systemService: SystemService = inject(SystemService);
  protected windowService: WindowService = inject(WindowService);
  protected settings: SettingsService = inject(SettingsService);

  protected getLocalStorageVal(value: string): string | null {
    if (localStorage.getItem(value) !== null) return localStorage.getItem(value);

    return '';
  }
}
