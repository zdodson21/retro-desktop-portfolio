import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './calculator-button.component.scss',
})
export class CalculatorButtonComponent {
  // TODO might want to make a custom font for the letters, numbers, and symbols used
  @Input({ alias: 'btn-label' }) public btnLabel: string;
  @Input({ alias: 'color' }) public color: string = 'blue';
  @Input({ alias: 'long' }) public isLong: boolean = false;
}
