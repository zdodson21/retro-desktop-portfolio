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
        console.log('adding active')
        this.item.classList.add('active')
      }
      else {
        console.log('remove active')
        this.item.classList.remove('active');
      }
      console.log(this.store.focus())
    });
  }

  singleClickHandler(event: MouseEvent) {
    event?.stopPropagation();
    console.log('applying focus')
    const item = this.desktopIconRef.nativeElement;
    this.store.focus.set(item);
  }
}
