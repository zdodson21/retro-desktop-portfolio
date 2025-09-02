// ! State management

import { Injectable, signal, WritableSignal } from '@angular/core';
import { OpenPrograms } from '../interfaces/open-programs.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // ! Common
  focus: WritableSignal<string> = signal('');
  // TODO might want to change to a focus order so if an item is closed, it can switch focus (stack data structure focuses last item in array)
  // Essentially make array, focus on last item in array. Also there should only be one of each item in array, each window can only have one instance
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
