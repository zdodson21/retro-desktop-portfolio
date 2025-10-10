import { Injectable } from '@angular/core';
import { Item } from '../../interfaces/file-types';

@Injectable({
  providedIn: 'root',
})
export class FileSystemService {
  public fileSystem: Array<Item> = [
    {
      itemType: 'folder',
      name: 'My Documents',
      children: [
        {
          itemType: 'folder',
          name: 'My Websites',
          children: [
            // TODO see if this can be made with a forEach() loop
            {
              itemType: 'file',
              name: 'about-me',
              type: 'htm',
            },
            {
              itemType: 'file',
              name: 'hax-audit',
              type: 'htm',
            },
            {
              itemType: 'file',
              name: 'hax-chat-agent',
              type: 'htm',
            },
            {
              itemType: 'file',
              name: 'open-source-contributions',
              type: 'htm',
            },
            {
              itemType: 'file',
              name: 'retro-desktop-portfolio',
              type: 'htm',
            },
            {
              itemType: 'file',
              name: 'small-projects',
              type: 'htm',
            },
          ],
        },
      ],
    },
    {
      itemType: 'folder',
      name: 'Program Files',
      children: [
        {
          itemType: 'program',
          name: 'Internet Explorer',
          focusName: 'internet-explorer',
        },
      ],
    },
  ];
}
