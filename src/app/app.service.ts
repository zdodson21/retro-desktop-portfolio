// ! State management

import { Injectable, signal, WritableSignal } from '@angular/core';
import { OpenPrograms } from '../interfaces/open-programs.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // ! Common
  public focus: WritableSignal<string> = signal('');
  public openPrograms: OpenPrograms = signal([]);

  // ! Start Menu

  // ! Alerts

  // ! Window Management
  public minimizedPrograms: WritableSignal<string[]> = signal([]);

  public viewportWidth: WritableSignal<number> = signal(globalThis.innerWidth);
  public viewportHeight: WritableSignal<number> = signal(globalThis.innerHeight);

  public mobilePercents = {
    width: 90,
    height: 80,
  }

  private userAgent: string = navigator.userAgent;

  // ! Functions

  // ! System Information
  /**
   * @description get browser from user agent
   * @returns current browser
   */
  public getBrowser(): string {
    if (this.userAgent.includes('Edg/')) {
      return 'Microsoft Edge';
    } else if (this.userAgent.includes('OPR/')) {
      return 'Opera';
    } else if (this.userAgent.includes('Firefox')) {
      return 'Firefox';
    } else if (this.userAgent.includes('Chrome')) {
      return 'Google Chrome';
    } else if (this.userAgent.includes('Safari')) {
      return 'Safari / Webkit';
    }

    return 'Unidentified Browser';
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
    if (this.getOS() === 'Android' || this.getOS() === 'iPhone' || this.getOS() === 'iPadOS') return true;

    return false;
  }

  public systemCores: number = navigator.hardwareConcurrency;

  public webAddress: string = `${globalThis.location.protocol}//${globalThis.location.host}`;

  // ! Future Items
  public isSoundEnabled: WritableSignal<boolean> = signal(false);
  public customBackgroundColor: WritableSignal<string> = signal('');
}
