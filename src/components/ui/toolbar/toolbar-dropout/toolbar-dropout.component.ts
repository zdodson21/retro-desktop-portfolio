import { Component, Input } from '@angular/core';

@Component({
  selector: 'toolbar-dropout',
  imports: [],
  templateUrl: './toolbar-dropout.component.html',
  styleUrl: './toolbar-dropout.component.scss',
})
export class ToolbarDropoutComponent {
  @Input({ alias: 'text' }) public text: string;
  protected isHovered: boolean = false;
}
