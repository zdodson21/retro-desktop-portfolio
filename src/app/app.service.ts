// State management

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // ! Start Menu
  isStartMenuOpen = signal(false);
  focus = signal('none');

  // ! Window Management


  // ! Functions

  // constructor() { }
}
