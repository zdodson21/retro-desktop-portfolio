import { Component, inject } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'control-panel',
  imports: [WindowFrameComponent],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss',
})
export class ControlPanelComponent {
  private systemService: SystemService = inject(SystemService);

  protected clearLocalStorage(): void {
    if (globalThis.confirm('This will reset this web application back to its initial state. Continue?')) {
      localStorage.clear();
      globalThis.location.href = this.systemService.webAddress;
    }
  }
}
