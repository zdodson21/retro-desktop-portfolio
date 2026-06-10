import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'start-dropout',
  imports: [],
  templateUrl: './start-dropout.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './start-dropout.component.scss',
})
export class StartDropoutComponent {
  @Input({ alias: 'icon', required: true }) public src: string;
  @Input({ alias: 'text', required: true }) public text: string;
  @Input({ alias: 'bottom' }) public bottom: boolean;

  protected isHovered: boolean = false;
}
