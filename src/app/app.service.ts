import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isStartMenuOpen = signal(false);

  constructor() { }
}
