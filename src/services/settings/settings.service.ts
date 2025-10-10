import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public isSoundEnabled: WritableSignal<boolean> = signal(false);
  public customBackgroundColor: WritableSignal<string> = signal('');
}
