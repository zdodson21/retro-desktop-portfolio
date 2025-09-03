import { WritableSignal } from '@angular/core';

export interface Programs {
  programName: string;
  focusName: string;
}

export type OpenPrograms = WritableSignal<Programs[]>;
