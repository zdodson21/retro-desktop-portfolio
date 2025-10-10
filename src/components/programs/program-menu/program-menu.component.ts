import { Component } from '@angular/core';
import { StartItemComponent } from '../../start/start-item/start-item.component';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'program-menu',
  imports: [StartItemComponent, WindowFrameComponent],
  templateUrl: './program-menu.component.html',
  styleUrl: './program-menu.component.scss',
})
export class ProgramMenuComponent {}
