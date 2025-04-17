import { Component, effect, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { StartItemComponent } from '../start-item/start-item.component';
import { StartDropdownComponent } from '../start-dropdown/start-dropdown.component';
import { StartShutdownComponent } from '../start-shutdown/start-shutdown.component';

@Component({
  selector: 'start-menu',
  imports: [StartDropdownComponent ,StartItemComponent, StartShutdownComponent],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss'
})
export class StartMenuComponent {
  @ViewChild('startMenu') startMenuRef!: ElementRef;

  private store: AppService = inject(AppService);
  private renderer: Renderer2 = inject(Renderer2);
  private elementRef: ElementRef = inject(ElementRef);
  private item: HTMLElement;

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
    this.item = this.startMenuRef.nativeElement;
  }

  clickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set("start-menu");
  }
}
