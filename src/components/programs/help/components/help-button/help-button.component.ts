import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'help-button',
  imports: [],
  templateUrl: './help-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './help-button.component.scss',
})
export class HelpButtonComponent {
  @Input({ alias: 'active' }) public isActive: boolean = false;
}
