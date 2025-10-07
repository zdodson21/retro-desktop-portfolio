import { Injectable, WritableSignal, signal } from '@angular/core';
import { DNS } from '../../../interfaces/site-list';

@Injectable({
  providedIn: 'root'
})
export class InternetExplorerService {
  public statusBarIcon: WritableSignal<string> = signal('assets/icons/html-file.svg')
  public statusBarContent: WritableSignal<string> = signal('Ready');
  public browserHistory: WritableSignal<DNS> = signal([]);
  public sidebar: WritableSignal<boolean> = signal(false);
}
