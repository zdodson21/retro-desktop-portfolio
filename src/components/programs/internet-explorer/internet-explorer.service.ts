import { Injectable, WritableSignal, signal } from '@angular/core';
import { DNS } from '../../../interfaces/site-list';

@Injectable({
  providedIn: 'root',
})
export class InternetExplorerService {
  public statusBarIcon: WritableSignal<string> = signal('assets/icons/html-file.svg');
  public statusBarContent: WritableSignal<string> = signal('Ready');
  public browserHistory: WritableSignal<DNS> = signal([]);
  public sidebar: WritableSignal<boolean> = signal(false);
  public displayedSite: WritableSignal<string> = signal('about-me');
  public darkMode: WritableSignal<boolean> = signal(true); // TODO set false

  /*
    List:
      * .com = published non-personal projects, commercial & noncommercial
      * .org = professional work
      * .net = networking, personal projects, etc.
      * .edu = contributions to education / academics
      * .os = open source contributions
  */
  public possibleSites: DNS = [
    {
      domain: 'about-me',
      tld: 'net',
    },
    {
      domain: 'calculator',
      tld: 'net',
    },
    {
      domain: 'hax-audit',
      tld: 'os',
    },
    {
      domain: 'hax-chat-agent',
      tld: 'org',
    },
    {
      domain: 'open-source-contributions',
      tld: 'os',
    },
    {
      domain: 'py-weather',
      tld: 'net',
    },
    {
      domain: 'retro-desktop-portfolio',
      tld: 'net',
    },
  ];
}
