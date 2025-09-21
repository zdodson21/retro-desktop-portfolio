import { Component } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'windows-explorer',
  imports: [WindowFrameComponent],
  templateUrl: './windows-explorer.component.html',
  styleUrl: './windows-explorer.component.scss',
})
export class WindowsExplorerComponent {}
