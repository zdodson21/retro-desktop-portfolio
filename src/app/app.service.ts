import { Service, signal, WritableSignal } from '@angular/core';
import { desktop_e } from './enums/desktop.enum';

@Service()
export class AppService {
  public focus: WritableSignal<string> = signal('');

  /**
   * @description Sets the desktop mode
   * @public
   * @type WriteableSignal<number>
   */
  public desktopMode: WritableSignal<number> = signal(desktop_e.DESKTOP);
}
