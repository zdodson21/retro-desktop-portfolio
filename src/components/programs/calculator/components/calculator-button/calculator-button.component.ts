import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss',
})
export class CalculatorButtonComponent {
  // TODO might want to make a custom font for the letters, numbers, and symbols used
  @Input({ alias: 'btn-label' }) public btnLabel: string;
  @Input({ alias: 'color' }) public color: string = 'blue';
  @Input({ alias: 'long' }) public isLong: boolean = false;
}
