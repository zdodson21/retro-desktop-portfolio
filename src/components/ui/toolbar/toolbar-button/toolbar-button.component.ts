import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toolbar-button',
  imports: [],
  templateUrl: './toolbar-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './toolbar-button.component.scss',
})
export class ToolbarButtonComponent {
  @Input({ alias: 'text' }) public text: string;
}
