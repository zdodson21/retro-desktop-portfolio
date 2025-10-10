import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowsExplorerService {
  public currentLocation: WritableSignal<Array<string>> = signal(['test-location']);
  public focusedIcon: WritableSignal<string> = signal('');
}
