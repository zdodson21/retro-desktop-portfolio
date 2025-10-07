import { Component, effect, ElementRef, inject, Renderer2 } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { StartDropdownComponent } from '../start-dropdown/start-dropdown.component';
import { StartItemComponent } from '../start-item/start-item.component';
import { StartShutdownComponent } from '../start-shutdown/start-shutdown.component';

@Component({
  selector: 'start-menu',
  imports: [StartDropdownComponent, StartItemComponent, StartShutdownComponent],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss',
})
export class StartMenuComponent {
  private store: AppService = inject(AppService);
  private renderer: Renderer2 = inject(Renderer2);
  private elementRef: ElementRef = inject(ElementRef);

  constructor() {
    effect(() => {
      if (this.store.focus() === 'start-menu') {
        this.renderer.addClass(this.elementRef.nativeElement, 'visible');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'visible');
      }
    });
  }

  /**
   * @description sets focus to "start-menu"
   * @param event Mouse click event
   */
  protected clickHandler(event: MouseEvent): void {
    event?.stopPropagation();
    this.store.focus.set('start-menu');
  }
}
