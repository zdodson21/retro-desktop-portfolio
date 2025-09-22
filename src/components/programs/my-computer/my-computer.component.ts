import { Component, inject } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'my-computer',
  imports: [WindowFrameComponent],
  templateUrl: './my-computer.component.html',
  styleUrl: './my-computer.component.scss',
})
export class MyComputerComponent {
  public store: AppService = inject(AppService);
}
