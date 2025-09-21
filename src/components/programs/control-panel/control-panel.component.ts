import { Component } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'control-panel',
  imports: [WindowFrameComponent],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss',
})
export class ControlPanelComponent {}
