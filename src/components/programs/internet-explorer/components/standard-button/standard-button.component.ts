import { Component, Input } from '@angular/core';

@Component({
  selector: 'standard-button',
  imports: [],
  templateUrl: './standard-button.component.html',
  styleUrl: './standard-button.component.scss'
})
export class StandardButtonComponent {
  @Input({ 'alias': 'button-name', 'required': true }) public buttonName: string;
  protected text: string;
  protected hovered: boolean = false;

  ngAfterContentInit() {
    let firstChar: string = this.buttonName?.charAt(0);
    let restOfString: string = this.buttonName?.slice(1);

    firstChar = firstChar?.toUpperCase();

    this.text = `${firstChar}${restOfString}`
  }
}
