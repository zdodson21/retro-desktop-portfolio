import { Service, signal, WritableSignal } from '@angular/core';

@Service()
export class WindowsExplorerService {
  public currentLocation: WritableSignal<Array<string>> = signal(['test-location']);
  public focusedIcon: WritableSignal<string> = signal('');
}
