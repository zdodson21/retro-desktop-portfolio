import { Injectable, WritableSignal, signal } from '@angular/core';
import { OpenPrograms } from '../../interfaces/open-programs.interface';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  public openPrograms: OpenPrograms = signal([]);
  public minimizedPrograms: WritableSignal<string[]> = signal([]);

  public mobilePercents = {
    width: 90,
    height: 80,
  };
}
