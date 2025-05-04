import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  inject,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'desktop-icon',
  imports: [],
  templateUrl: './desktop-icon.component.html',
  styleUrl: './desktop-icon.component.scss',
})
export class DesktopIconComponent {
  @Input({ alias: 'icon-src' }) public src: string;
  @Input({ alias: 'icon-text' }) public text: string;
  @Input({ alias: 'focus-name' }) public focusName: string;

  @ViewChild('desktopIcon') private desktopIconRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  ngAfterViewInit() {
    this.item = this.desktopIconRef.nativeElement;
  }

  public isElementFocused: WritableSignal<boolean> = signal(false);

  constructor() {
    effect(() => {
      if (this.store.focus() == this.focusName) {
        this.isElementFocused.set(true);
      } else {
        this.isElementFocused.set(false);
      }
    });
  }

  /**
   * @description sets focus on desktop icon
   */
  public singleClickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set(this.focusName);
  }

  /**
   * @description opens applicable program / site / file
   */
  public dblClickHandler(event: MouseEvent) {
    event?.stopPropagation();
    console.log('double click');
  }
}
