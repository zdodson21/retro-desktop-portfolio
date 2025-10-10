import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public focus: WritableSignal<string> = signal('');
  public desktopMode: WritableSignal<number> = signal(0); // 0 = desktop | 1 = shutdown | 2 = MSDOS-Prompt (when added)
}
