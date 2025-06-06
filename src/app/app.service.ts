// State management

import { Injectable, signal, WritableSignal } from '@angular/core';
import { OpenPrograms } from '../interfaces/open-programs.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // ! Common
  focus: WritableSignal<string> = signal('');
  openPrograms: OpenPrograms = signal([
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
