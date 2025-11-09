import { Injectable, OnInit, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public isSoundEnabled: WritableSignal<boolean> = signal(false);
  public customBackgroundColor: WritableSignal<string> = signal('');

  public readonly localStorageValues: Array<string> = [
    /*
     * Display "Welcome" program on web application start up.
     *
     * Possible values:
     *   "yes" (default): displays welcome program on start up.
     *   "no":            prevents display of welcome program on start up.
     */
    'openWelcomeOnStartup', // 0

    /*
     * All pages in the "Internet Explorer" program will be displayed
     * using a "dark mode" theme
     *
     * Possible values:
     *   "enabled":            dark mode theming will be used
     *   "disabled" (default): dark mode theming will not be used
     */
    'internetExplorerDarkMode', // 1

    /*
     * "Array" holding values of "sites" that have been visited
     *
     * Possible values:
     *   []:    Initial value, no site values
     *   [...]: Any sites within the sites list
     *
     */
    'ieVisitedSites', // 2
  ];
}
