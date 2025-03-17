import { Component } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { DesktopIconComponent } from '../desktop-icon/desktop-icon.component';

@Component({
  selector: 'desktop-environment',
  imports: [DesktopIconComponent, WindowFrameComponent],
  templateUrl: './desktop-environment.component.html',
  styleUrl: './desktop-environment.component.scss'
})
export class DesktopEnvironmentComponent {

}
