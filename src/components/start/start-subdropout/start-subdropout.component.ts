import { Component, Input } from '@angular/core';

@Component({
  selector: 'start-subdropout',
  imports: [],
  templateUrl: './start-subdropout.component.html',
  styleUrl: './start-subdropout.component.scss'
})
export class StartSubdropoutComponent {
  @Input({ alias: 'icon' }) public src: string;
  @Input({ alias: 'text' }) public text: string;
  @Input({ alias: 'bottom' }) public bottom: boolean;

  protected isHovered: boolean = false;
}
