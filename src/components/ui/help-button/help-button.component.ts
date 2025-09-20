import { Component, Input } from '@angular/core';

@Component({
  selector: 'help-button',
  imports: [],
  templateUrl: './help-button.component.html',
  styleUrl: './help-button.component.scss'
})
export class HelpButtonComponent {
  @Input({ alias: 'active'}) public isActive: boolean = false;
}
