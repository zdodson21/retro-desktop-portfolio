import { Component } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { MitTemplate } from './templates/mit-template/mit-template.component';

@Component({
  selector: 'licenses',
  imports: [
    MitTemplate,
    WindowFrameComponent
  ],
  templateUrl: './licenses.component.html',
  styleUrl: './licenses.component.scss',
})
export class LicensesComponent {}
