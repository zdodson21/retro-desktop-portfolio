import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public focus: WritableSignal<string> = signal('');

  /**
   * @description Sets the desktop mode (0 = desktop | 1 = shutdown | 2 = MSDOS-Prompt)
   * @public
   * @type WriteableSignal<number>
   */
  public desktopMode: WritableSignal<number> = signal(0);
}
