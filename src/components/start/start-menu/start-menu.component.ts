import { Component, effect, ElementRef, inject, Renderer2 } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'start-menu',
  imports: [],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss'
})
export class StartMenuComponent {
  private store = inject(AppService);
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);

  constructor() {
    effect(() => {
      if (this.store.isStartMenuOpen()) {
        this.renderer.addClass(this.elementRef.nativeElement, 'visible');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'visible');
      }
    });
  }
}
