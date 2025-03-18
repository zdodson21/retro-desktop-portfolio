import { Component, effect, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'start-menu',
  imports: [],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss'
})
export class StartMenuComponent {
  @ViewChild('startMenu') startMenuRef!: ElementRef;

  private store = inject(AppService);
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private item: any;

  constructor() {
    effect(() => {
      if (this.store.isStartMenuOpen()) {
        this.renderer.addClass(this.elementRef.nativeElement, 'visible');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'visible');
      }
    });
  }

  ngAfterViewInit() {
    this.item = this.startMenuRef.nativeElement
  }

  clickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set(this.item);
  }
}
