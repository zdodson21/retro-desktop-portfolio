// State management

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // ! Common
  focus = signal('');

  // ! Start Menu
  isStartMenuOpen = signal(false);

  // ! Alerts
  showShutdownAlert = signal(false);

  // ! Window Management


  // ! Functions

  // constructor() { }
}
