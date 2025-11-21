import { Component, inject, Input } from '@angular/core';
import { InternetExplorerService } from '../../../programs/internet-explorer/internet-explorer.service';
import { SystemService } from '../../../../services/system/system.service';

@Component({
  selector: 'a-ie',
  imports: [],
  templateUrl: './a-ie.component.html',
  styleUrl: './a-ie.component.scss',
})
export class AIeComponent {
  @Input({ alias: 'href' }) public href: string;
  @Input({ alias: 'not-in-site' }) public notInSite: boolean = false;

  private systemService: SystemService = inject(SystemService);
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
  private prevIcon: string;
  private prevValue: string;

  /**
   * @description set status bar content to href
   */
  protected hover(): void {
    this.prevIcon = this.IEService.statusBarIcon();
    this.prevValue = this.IEService.statusBarContent();
    let setValue: string = '';

    if (!this.checkSpecialString()) {
      switch (this.systemService.getBrowser()) {
        case 'Brave':
          setValue = 'assets/icons/brave.svg';
          break;
        case 'DuckDuckGo':
          setValue = 'assets/icons/duckduckgo.svg';
          break;
        case 'Firefox':
          setValue = 'assets/icons/firefox.svg';
          break;
        case 'Google Chrome':
          setValue = 'assets/icons/chrome.svg';
          break;
        case 'Microsoft Edge':
          setValue = 'assets/icons/edge.svg';
          break;
        case 'Opera':
          setValue = 'assets/icons/opera.svg';
          break;
        case 'Opera GX':
          setValue = 'assets/icons/opera-gx.svg';
          break;
        case 'Samsung Browser':
          setValue = 'assets/icons/samsung-browser.svg';
          break;
        case 'Safari':
          setValue = 'assets/icons/safari.svg';
          break;
        case 'Steam':
          setValue = 'assets/icons/steam.svg';
          break;

        default:
          setValue = 'assets/icons/internet-explorer/internet-globe.svg';
      }

      this.IEService.statusBarIcon.set(setValue);
    }

    this.IEService.statusBarContent.set(`${this.href}`);
  }

  /**
   * @description set status bar content value to previous (pre-hover) value
   */
  protected unhover(): void {
    if (this.prevIcon === 'assets/icons/internet-explorer/copy-button.svg') {
      this.IEService.statusBarIcon.set('assets/icons/html-file.svg')
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

  private checkSpecialString(): boolean {
    if (this.href.includes('github.com')) {
      this.IEService.statusBarIcon.set('assets/icons/github-mark.svg');
      return true;
    } else if (this.href.includes('linkedin.com')) {
      this.IEService.statusBarIcon.set('assets/icons/linkedin.png');
      return true;
    } else if (this.href.includes('youtube.com')) {
      this.IEService.statusBarIcon.set('assets/icons/youtube.svg');
      return true;
    }

    return false;
  }
}
