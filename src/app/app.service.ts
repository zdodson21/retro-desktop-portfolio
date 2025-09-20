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
  // TODO When a program is added to openPrograms, it needs to be added to the route params so it can render

  // ! Start Menu

  // ! Alerts

  // ! Window Management
  minimizedPrograms: WritableSignal<string[]> = signal([]);

  viewportWidth: WritableSignal<number> = signal(globalThis.innerWidth);
  viewportHeight: WritableSignal<number> = signal(globalThis.innerHeight);

  // ! Functions
  // TODO add function for if programs query is empty, then programs query is removed.
  // TODO might need to add a similar function for internet explorer

  // ! Future Items
  isSoundEnabled: WritableSignal<boolean> = signal(false);
  customBackgroundColor: WritableSignal<string> = signal('');
}
