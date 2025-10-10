import { Injectable, signal, WritableSignal } from '@angular/core';
import { OpenPrograms } from '../interfaces/open-programs.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // TODO similar to what I did with SCSS, I might want to abstract a bunch of this stuff into separate system wide services
  // TODO ensure service tests are in their own file
  // ! Common
  public focus: WritableSignal<string> = signal('');
  public desktopMode: WritableSignal<number> = signal(0); // 0 = desktop | 1 = shutdown | 2 = MSDOS-Prompt (when added)

  // ! Window Management
  public openPrograms: OpenPrograms = signal([]);
  public minimizedPrograms: WritableSignal<string[]> = signal([]);

  public mobilePercents = {
    width: 90,
    height: 80,
  };

  // ! System Information
  // private userAgent: string = navigator.userAgent;

  // public viewportWidth: WritableSignal<number> = signal(globalThis.innerWidth);
  // public viewportHeight: WritableSignal<number> = signal(globalThis.innerHeight);

  // /**
  //  * @description get browser from user agent
  //  * @returns current browser
  //  */
  // public getBrowser(): string {
  //   if (this.userAgent.includes('DuckDuckGo')) {
  //     return 'DuckDuckGo';
  //   } else if (this.userAgent.includes('Edg/')) {
  //     return 'Microsoft Edge';
  //   } else if (this.userAgent.includes('Brave/') || this.isBrave()) {
  //     return 'Brave';
  //   } else if (this.userAgent.includes('OPR/')) {
  //     return 'Opera';
  //   } else if (this.userAgent.includes('OPX/')) {
  //     return 'Opera GX';
  //   } else if (this.userAgent.includes('SamsungBrowser')) {
  //     return 'Samsung Browser';
  //   } else if (this.userAgent.includes('Firefox')) {
  //     return 'Firefox';
  //   } else if (this.userAgent.includes('Chrome')) {
  //     return 'Google Chrome';
  //   } else if (this.userAgent.includes('Safari')) {
  //     return 'Safari';
  //   }

  //   return 'Unidentified Browser';
  // }

  // /**
  //  * @description detect Brave browser
  //  * @returns true if user is utilizing Brave browser
  //  */
  // private isBrave(): boolean {
  //   return typeof (navigator as unknown as { brave?: unknown }).brave !== 'undefined';
  // }

  // /**
  //  * @description get operating system from user agent
  //  * @return operating system
  //  */
  // public getOS(): string {
  //   if (this.userAgent.includes('Android')) {
  //     return 'Android';
  //   } else if (this.userAgent.includes('Linux')) {
  //     return 'Linux';
  //   } else if (this.userAgent.includes('Windows')) {
  //     return 'Windows';
  //   } else if (this.userAgent.includes('Macintosh')) {
  //     return 'macOS';
  //   } else if (this.userAgent.includes('FreeBSD')) {
  //     return 'FreeBSD';
  //   } else if (this.userAgent.includes('iPhone')) {
  //     return 'iOS';
  //   } else if (this.userAgent.includes('iPad')) {
  //     return 'iPadOS';
  //   }

  //   return 'Unidentified Operating System';
  // }

  // /**
  //  * @description determines if current operating system is primarily made for mobile devices
  //  * @return true if mobile, false if not
  //  */
  // public isMobile(): boolean {
  //   if (this.getOS() === 'Android' || this.getOS() === 'iOS' || this.getOS() === 'iPadOS') return true;

  //   return false;
  // }

  // public systemCores: number = navigator.hardwareConcurrency;

  // public webAddress: string = `${globalThis.location.protocol}//${globalThis.location.host}`;
}
