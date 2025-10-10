interface Program {
  itemType: 'program';
  name: string;
  focusName: string;
}

interface File {
  itemType: 'file';
  name: string;
  type: 'html' | 'htm';
}

interface Folder {
  itemType: 'folder';
  name: string;
  children: (File | Folder | Program)[];
}

export type Item = File | Folder | Program;
