import { Component, Input, ViewChild, ElementRef, inject, effect } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'desktop-icon',
  imports: [],
  templateUrl: './desktop-icon.component.html',
  styleUrl: './desktop-icon.component.scss'
})
export class DesktopIconComponent {
  @Input({alias: 'icon-src'}) src: string;
  @Input({alias: 'icon-text'}) text: string;

  @ViewChild('desktopIcon') desktopIconRef!: ElementRef;

  private store = inject(AppService);
  private item: any;

  ngAfterViewInit() {
    this.item = this.desktopIconRef.nativeElement;
  }

  constructor() {
    effect(() => {
      if (this.store.focus() == this.item) {
        this.item.classList.add('active');
      }
      else {
        this.item.classList.remove('active');
      }
    });
  }

  singleClickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set(this.item);
    this.store.isStartMenuOpen.set(false);
  }

  dblClickHandler(event: MouseEvent) {
    event?.stopPropagation();
    console.log('double click');
  }
}
