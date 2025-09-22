import { Component } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'my-computer',
  imports: [WindowFrameComponent],
  templateUrl: './my-computer.component.html',
  styleUrl: './my-computer.component.scss',
})
export class MyComputerComponent {
  public availableCores: number = navigator.hardwareConcurrency;
  public address: string = `${globalThis.location.protocol}//${globalThis.location.host}`;
  private userAgent: string = navigator.userAgent;

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
      return 'Safari / Webkit Browser';
    }

    return 'Unidentified Browser';
  }

  public getOS(): string {
    if (this.userAgent.includes('Linux')) {
      return 'Linux';
    } else if (this.userAgent.includes('Windows')) {
      return 'Windows';
    } else if (this.userAgent.includes('Macintosh')) {
      return 'macOS';
    } else if (this.userAgent.includes('FreeBSD')) {
      return 'FreeBSD';
    }

    return 'Unidentified Operating System';
  }
}
