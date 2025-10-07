import { Component, Input } from '@angular/core';

@Component({
  selector: 'toolbar-item',
  imports: [],
  templateUrl: './toolbar-item.component.html',
  styleUrl: './toolbar-item.component.scss'
})
export class ToolbarItemComponent {
  @Input({ 'alias': 'left-text' }) public leftText: string;
  @Input({ 'alias': 'right-text' }) public rightText: string;
}
