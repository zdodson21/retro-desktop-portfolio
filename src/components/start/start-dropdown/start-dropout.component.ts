import { Component, Input } from '@angular/core';

@Component({
  selector: 'start-dropout',
  imports: [],
  templateUrl: './start-dropout.component.html',
  styleUrl: './start-dropout.component.scss',
})
export class StartDropoutComponent {
  @Input({ alias: 'icon' }) public src: string;
  @Input({ alias: 'text' }) public text: string;

  protected isHovered: boolean = false;
}
