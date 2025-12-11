import { Component, inject } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { PaintService } from './paint.service';
import { Coordinates } from '../../../interfaces/coordinates';

@Component({
  selector: 'paint',
  imports: [WindowFrameComponent],
  templateUrl: './paint.component.html',
  styleUrl: './paint.component.scss',
})
export class PaintProgram {
  protected paintService: PaintService = inject(PaintService);
  protected coord: Coordinates = {
    x: 0,
    y: 0,
  };
}
