import { Component, inject, Input } from '@angular/core';
import { InternetExplorerService } from '../../internet-explorer.service';

@Component({
  selector: 'standard-button',
  imports: [],
  templateUrl: './standard-button.component.html',
  styleUrl: './standard-button.component.scss',
})
export class StandardButtonComponent {
  @Input({ alias: 'button-name', required: true }) public buttonName: string;
  @Input({ alias: 'button-hint', required: true }) public buttonHint: string;
  protected text: string;
  protected hovered: boolean = false;

  protected IEService: InternetExplorerService = inject(InternetExplorerService);
  protected prevIcon: string;
  protected prevValue: string;

  ngAfterContentInit() {
    let firstChar: string = this.buttonName?.charAt(0);
    let restOfString: string = this.buttonName?.slice(1);

    firstChar = firstChar?.toUpperCase();

    this.text = `${firstChar}${restOfString}`;
  }

  protected hover(): void {
    this.hovered = true;

    if (this.IEService.statusBarIcon() !== 'assets/icons/windows-help.webp') {
      this.prevIcon = this.IEService.statusBarIcon();
    }

    if (this.IEService.statusBarContent() !== this.buttonHint) {
      this.prevValue = this.IEService.statusBarContent();
    }

    console.log(this.prevIcon);

    this.IEService.statusBarIcon.set('assets/icons/windows-help.webp');
    this.IEService.statusBarContent.set(this.buttonHint);
  }

  protected unhover(): void {
    this.hovered = false;

    if (this.prevIcon === 'assets/icons/internet-explorer/copy-button.svg') {
      this.IEService.statusBarIcon.set('assets/icons/html-file.webp');
    } else {
      this.IEService.statusBarIcon.set(this.prevIcon);
    }

    if (this.prevValue === '' || this.prevValue === this.IEService.copyText) {
      this.IEService.statusBarContent.set('Ready');
    } else {
      this.IEService.statusBarContent.set(this.prevValue);
    }

    this.prevIcon = '';
    this.prevValue = '';
  }
}
