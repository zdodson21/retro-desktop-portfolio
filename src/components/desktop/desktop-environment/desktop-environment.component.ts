import { Component } from '@angular/core';
import { DesktopIconComponent } from '../desktop-icon/desktop-icon.component';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'desktop-environment',
  imports: [DesktopIconComponent, WindowFrameComponent],
  templateUrl: './desktop-environment.component.html',
  styleUrl: './desktop-environment.component.scss'
})
export class DesktopEnvironmentComponent {

}
