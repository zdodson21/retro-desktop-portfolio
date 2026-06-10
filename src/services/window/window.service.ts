import { Service, WritableSignal, signal } from '@angular/core';
import { OpenPrograms } from '../../interfaces/open-programs.interface';

@Service()
export class WindowService {
  public openPrograms: OpenPrograms = signal([]);
  public minimizedPrograms: WritableSignal<string[]> = signal([]);

  public readonly mobilePercents = {
    width: 90,
    height: 80,
  };
}
