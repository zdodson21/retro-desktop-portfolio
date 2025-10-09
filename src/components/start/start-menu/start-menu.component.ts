import { Component, effect, ElementRef, inject, Renderer2 } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { StartDropoutComponent } from '../start-dropdown/start-dropout.component';
import { StartItemComponent } from '../start-item/start-item.component';
import { StartShutdownComponent } from '../start-shutdown/start-shutdown.component';
import { StartSubdropoutComponent } from '../start-subdropout/start-subdropout.component';
import { StartSubitemComponent } from '../start-subitem/start-subitem.component';
import { StartSubmenuComponent } from '../start-submenu/start-submenu.component';

@Component({
  selector: 'start-menu',
  imports: [
    StartDropoutComponent,
    StartItemComponent,
    StartShutdownComponent,
    StartSubdropoutComponent,
    StartSubitemComponent,
    StartSubmenuComponent,
  ],
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
