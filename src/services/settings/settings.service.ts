import { Service, signal, WritableSignal } from '@angular/core';

@Service()
export class SettingsService {
  public isSoundEnabled: WritableSignal<boolean> = signal(false);
  public customBackgroundColor: WritableSignal<string> = signal('');

  public readonly localStorageValues: Array<string> = [
    /**
     * Display "Welcome" program on web application start up.
     *
     * Possible values:
     *   "yes" (default): displays welcome program on start up.
     *   "no":            prevents display of welcome program on start up.
     */
    'openWelcomeOnStartup', // 0

    /**
     * All pages in the "Internet Explorer" program will be displayed
     * using a "dark mode" theme
     *
     * Possible values:
     *   "enabled":            dark mode theming will be used
     *   "disabled" (default): dark mode theming will not be used
     */
    "internetExplorerDarkMode", // 1

    /**
     * "Array" holding values of "sites" that have been visited
     *
     * Possible values:
     *   []:    Initial value, no site values
     *   [...]: Any sites within the sites list
     *
     */
    "ieVisitedSites", // 2

    /**
     * Sets whether the user has pressed the favorites button in Internet
     * explorer or not.
     *
     * Possible values:
     *  "false" (default): User has not pressed favorites button before, show favorites bar on start-up
     *  "true": User has pressed button before, do not show favorites bar on start-up
     */
    "pressedFavoritesButton", // 3
  ];
}
