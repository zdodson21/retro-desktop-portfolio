// State management

import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // ! Common
  focus: WritableSignal<string> = signal('');
  openPrograms = signal([
    {
      programName: "System Monitor",
      focusName: "system-monitor"
    }
    /*
      Format:
        {
          programName: "Program Name",
          focusName: "focus-name"
          state: "open"
        }

      Applicable states:
        * "open" (Open window, movable, not maximized)
        * "maximized" (Maximized window, button should have different icon, not movable)
        * "minimized" (Minimized window, not visible, but still in taskbar.)
        * "closed" (This should only display if there is an error, state will be set to closed for item but item will be removed from array)
    */
  ]);

  // ! Start Menu
  isStartMenuOpen: WritableSignal<boolean> = signal(false);

  // ! Alerts
  showShutdownAlert: WritableSignal<boolean> = signal(false);

  // ! Window Management


  // ! Functions

  // constructor() { }
}
