import { WritableSignal } from '@angular/core';

export interface Programs {
  programName: string; // For dynamically generated items (such as `taskbar-item`)
  focusName: string; // Basically an id for a program
  iconPath: string; // So dynamic items (such as `taskbar-item`) can be created
}

export type OpenPrograms = WritableSignal<Programs[]>;
