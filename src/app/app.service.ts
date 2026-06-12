import { Service, signal, WritableSignal } from '@angular/core';

@Service()
export class AppService {
  public focus: WritableSignal<string> = signal('');

  public readonly desktop_e = {
    DESKTOP: 0,
    SHUTDOWN: 1,
    MSDOS: 2,
  }

  /**
   * @description Sets the desktop mode
   * @public
   * @type WriteableSignal<number>
   */
  public desktopMode: WritableSignal<number> = signal(this.desktop_e.DESKTOP);
}
