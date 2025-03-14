import { Component, Input } from '@angular/core';

@Component({
  selector: 'desktop-icon',
  imports: [],
  templateUrl: './desktop-icon.component.html',
  styleUrl: './desktop-icon.component.scss'
})
export class DesktopIconComponent {
  @Input({alias: 'icon-src'}) src: string;
  @Input({alias: 'icon-text'}) text: string;
}
