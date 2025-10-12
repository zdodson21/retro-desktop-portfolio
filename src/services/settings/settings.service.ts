import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public isSoundEnabled: WritableSignal<boolean> = signal(false);
  public customBackgroundColor: WritableSignal<string> = signal('');

  public localStorageValues: Array<string> = [
    /*
      Display "Welcome" program on web application start up.

      Possible values:
        * "yes": displays welcome program on start up | (set by default on first page visit).
        * "no": prevents display of welcome program on start up.
    */
    'openWelcomeOnStartup', // 0
  ];
}
