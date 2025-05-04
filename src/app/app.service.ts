// State management

import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // ! Common
  focus: WritableSignal<string> = signal('');
  openPrograms = signal([
    // TODO look into custom TS types and how they work, + Angular specifications
    /*
      Applicable States:
        * 0: minimized
        * 1: opened
    */
    {
      programName: 'System Monitor',
      focusName: 'system-monitor',
    },
  ]);

  // ! Start Menu

  // ! Alerts
  showShutdownAlert: WritableSignal<boolean> = signal(false);

  // ! Window Management
  viewportWidth: WritableSignal<number> = signal(globalThis.innerWidth);
  viewportHeight: WritableSignal<number> = signal(globalThis.innerHeight);

  // ! Functions
}
