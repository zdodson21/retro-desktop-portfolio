import { Component } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { FileIconComponent } from './components/file-icon/file-icon.component';
import { WindowsExplorerService } from './windows-explorer.service';

@Component({
  selector: 'windows-explorer',
  imports: [FileIconComponent, WindowFrameComponent],
  templateUrl: './windows-explorer.component.html',
  styleUrl: './windows-explorer.component.scss',
})
export class WindowsExplorerComponent {}
