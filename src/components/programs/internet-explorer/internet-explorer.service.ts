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
  public darkMode: WritableSignal<boolean> = signal(false);
  public readonly copyText: string = 'Copied current site URL to clipboard!';

  // prettier-ignore
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
      tags: [
        'portfolio',
        'zach dodson',
      ],
    },
    {
      domain: 'calculator',
      tld: 'net',
      tags: [
        'angular',
        'c',
        'emscripten',
        'html',
        'library',
        'math',
        'mathematics',
        'portfolio',
        'program',
        'scss',
        'webassembly',
      ],
    },
    {
      domain: 'hax-audit',
      tld: 'os',
      tags: [
        'hax',
        'haxcli',
        'haxtheweb',
        'js',
        'javascript',
        'node',
        'nodejs',
        'node package manager',
        'npm',
        'open source',
      ],
    },
    {
      domain: 'hax-chat-agent',
      tld: 'org',
      tags: [
        'css',
        'front-end',
        'hax',
        'haxtheweb',
        'hax web components',
        'html',
        'internship',
        'js',
        'javascript',
        'open source',
        'professional',
      ],
    },
    {
      domain: 'open-source-contributions',
      tld: 'os',
      tags: [
        'godot',
        'open source',
        'vscode icons',
      ],
    },
    {
      domain: 'py-weather',
      tld: 'net',
      tags: [
        'bash',
        'jinja',
        'jinja2',
        'python',
        'raspberry pi',
        'raspberry pi 5',
        'weather',
      ],
    },
    {
      domain: 'qr-maker',
      tld: 'com',
      tags: [
        'android',
        'android studio',
        'dart',
        'flutter',
        'linux',
      ]
    },
    {
      domain: 'retro-desktop-portfolio',
      tld: 'net',
      tags: [
        'personal project',
        'web app',
        'website'
      ]
    },
  ];
}
