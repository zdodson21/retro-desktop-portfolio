import { Component } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'calculator',
  imports: [WindowFrameComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  public isScientific: boolean = false;

  // TODO add routing for standard and scientific, if route = anything else (other than null / '' / standard / scientific) then it should auto change to standard
}
