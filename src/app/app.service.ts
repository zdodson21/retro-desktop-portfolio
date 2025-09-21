// ! State management

import { Injectable, signal, WritableSignal } from '@angular/core';
import { OpenPrograms } from '../interfaces/open-programs.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // ! Common
  focus: WritableSignal<string> = signal('');
  openPrograms: OpenPrograms = signal([]);

  // ! Start Menu

  // ! Alerts

  // ! Window Management
  minimizedPrograms: WritableSignal<string[]> = signal([]);

  viewportWidth: WritableSignal<number> = signal(globalThis.innerWidth);
  viewportHeight: WritableSignal<number> = signal(globalThis.innerHeight);

  // ! Functions

  // ! Future Items
  isSoundEnabled: WritableSignal<boolean> = signal(false);
  customBackgroundColor: WritableSignal<string> = signal('');
}
