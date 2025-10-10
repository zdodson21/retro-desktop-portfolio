import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowsExplorerService {
  public currentLocation: WritableSignal<string> = signal('');
}
