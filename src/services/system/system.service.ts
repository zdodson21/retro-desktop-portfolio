import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  public readonly userAgent: string = navigator.userAgent;

  public viewportWidth: WritableSignal<number> = signal(globalThis.innerWidth);
  public viewportHeight: WritableSignal<number> = signal(globalThis.innerHeight);

  /**
   * @description get browser from user agent
   * @returns current browser
   */
  public getBrowser(): string {
    if (this.userAgent.includes('DuckDuckGo')) {
      return 'DuckDuckGo';
    } else if (this.userAgent.includes('Valve Steam GameOverlay')) {
      return 'Steam';
    } else if (this.userAgent.includes('Edg/')) {
      return 'Microsoft Edge';
    } else if (this.userAgent.includes('Brave/') || this.isBrave()) {
      return 'Brave';
    } else if (this.userAgent.includes('OPR/')) {
      return 'Opera';
    } else if (this.userAgent.includes('OPX/')) {
      return 'Opera GX';
    } else if (this.userAgent.includes('SamsungBrowser')) {
      return 'Samsung Browser';
    } else if (this.userAgent.includes('Firefox')) {
      return 'Firefox';
    } else if (this.userAgent.includes('Chrome')) {
      return 'Google Chrome';
    } else if (this.userAgent.includes('Safari')) {
      return 'Safari';
    }

    return 'Unidentified Browser';
  }

  /**
   * @description detect Brave browser
   * @returns true if user is utilizing Brave browser
   */
  private isBrave(): boolean {
    return typeof (navigator as unknown as { brave?: unknown }).brave !== 'undefined';
  }

  /**
   * @description get operating system from user agent
   * @return operating system
   */
  public getOS(): string {
    if (this.userAgent.includes('Android')) {
      return 'Android';
    } else if (this.userAgent.includes('Linux')) {
      return 'Linux';
    } else if (this.userAgent.includes('Windows')) {
      return 'Windows';
    } else if (this.userAgent.includes('Macintosh')) {
      return 'macOS';
    } else if (this.userAgent.includes('FreeBSD')) {
      return 'FreeBSD';
    } else if (this.userAgent.includes('iPhone')) {
      return 'iOS';
    } else if (this.userAgent.includes('iPad')) {
      return 'iPadOS';
    }

    return 'Unidentified Operating System';
  }

  /**
   * @description determines if current operating system is primarily made for mobile devices
   * @return true if mobile, false if not
   */
  public isMobile(): boolean {
    if (this.getOS() === 'Android' || this.getOS() === 'iOS' || this.getOS() === 'iPadOS') return true;

    return false;
  }

  public readonly systemCores: number = navigator.hardwareConcurrency;

  public readonly webAddress: string = `${globalThis.location.protocol}//${globalThis.location.host}`;

  public readonly versionNum: string = '1.1.1';
}
