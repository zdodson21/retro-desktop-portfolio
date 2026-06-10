import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toolbar-item',
  imports: [],
  templateUrl: './toolbar-item.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './toolbar-item.component.scss',
})
export class ToolbarItemComponent {
  @Input({ alias: 'left-text' }) public leftText: string;
  @Input({ alias: 'right-text' }) public rightText: string;
  @Input({ alias: 'disabled' }) public disabled: boolean;
}
