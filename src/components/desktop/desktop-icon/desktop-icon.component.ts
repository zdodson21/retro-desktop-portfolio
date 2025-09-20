import { Component, effect, ElementRef, inject, Input, signal, ViewChild, WritableSignal } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { Programs } from '../../../interfaces/open-programs.interface';

@Component({
  selector: 'desktop-icon',
  imports: [],
  templateUrl: './desktop-icon.component.html',
  styleUrl: './desktop-icon.component.scss',
})
export class DesktopIconComponent {
  @Input({ alias: 'icon-src' }) public src: string;
  @Input({ alias: 'icon-text' }) public text: string;
  @Input({ alias: 'icon-focus-name' }) public iconFocusName: string;
  @Input({ alias: 'focus-name' }) public focusName: string; // The focus name of the program that opens on double click

  @ViewChild('desktopIcon') private desktopIconRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;
  private programDetails: Programs

  ngAfterViewInit() {
    this.item = this.desktopIconRef.nativeElement;
  }

  public isElementFocused: WritableSignal<boolean> = signal(false);

  constructor() {
    effect(() => {
      if (this.store.focus() !== this.iconFocusName && this.store.focus() !== this.focusName) {
        this.isElementFocused.set(false);
      }
    });
  }

  /**
   * @description sets focus on desktop icon
   */
  public singleClickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set(this.iconFocusName);
    this.isElementFocused.set(true);
  }

  /**
   * @description opens applicable program / site / file
   */
  public dblClickHandler(event: MouseEvent) {
    event?.stopPropagation();

    // if (!this.store.openPrograms().some((programs) => programs.focusName === this.focusName)) {
    //   this.store.openPrograms().push(this.programDetails);
    // }

    this.store.focus.set(this.focusName);
    this.isElementFocused.set(true);
  }
}
