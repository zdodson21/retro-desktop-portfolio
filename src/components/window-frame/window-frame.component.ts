import { Component, ElementRef, inject, Input, Renderer2, effect, ViewChild, signal } from '@angular/core';
import { AppService } from '../../app/app.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'window-frame',
  imports: [NgIf],
  templateUrl: './window-frame.component.html',
  styleUrl: './window-frame.component.scss'
})
export class WindowFrameComponent {
  // TODO add support for removing movability and resizeability, mainly for alerts (lock attribute)
  // Use start menu renderer as reference, along with taskbar-program for attribute setting

  @Input() alert = false; // will hide the minimize and view buttons, also prevents movement
  @Input({alias: 'focus-name'}) focusName: string;
  @Input({alias: 'window-title'}) title: string;
  @Input({alias: 'window-icon'}) icon: string;

  @ViewChild('viewButton') viewButtonRef!: ElementRef;
  @ViewChild('minimizeButton') minimizeButtonRef!: ElementRef;

  private store = inject(AppService);
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);

  private viewItem: any;
  private minimizeItem: any;

  private isDragging = false;
  private isResizing = false;
  private offset = { x: 0, y: 0};

  isElementFocused = signal(false);

  ngAfterViewInit() {
    this.viewItem = this.viewButtonRef.nativeElement;
    this.minimizeItem = this.minimizeButtonRef.nativeElement;

    if (this.alert) {
      this.viewItem.classList.add('hide-button');
      this.minimizeItem.classList.add('hide-button');
      this.isElementFocused.set(true);
    }
    else {
      this.setupDraggable();
    }
  }

  constructor() {
    effect(() => {
      if (!this.alert) {
        if (this.store.focus() == this.focusName) {
          this.isElementFocused.set(true);
        }
        else {
          this.isElementFocused.set(false);
        }
      }
    });
  }

  minimizeButtonHandler() {

  }

  viewButtonHandler() {

  }

  closeButtonHandler() {
    if (this.focusName === "shutdown-alert") {
      this.store.showShutdownAlert.set(false);
    }
    else {
      console.error(`Cannot close focus-name: ${this.focusName}`);
    }
  }

  /**
   * @description Sets focus to clicked window
   * @param event MouseEvent
   */
  setFocus(event?: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set(this.focusName);
    this.store.isStartMenuOpen.set(false);
  }

  /**
   * @description handles dragging events to move window around
   */
  private setupDraggable() {
    const TOP_PANEL = this.elementRef.nativeElement.querySelector('.top-panel');

    TOP_PANEL.addEventListener('mousedown', (e: MouseEvent) => {
      this.setFocus();
      this.isDragging = true;
      this.offset = {
        x: e.clientX - this.elementRef.nativeElement.offsetLeft,
        y: e.clientY - this.elementRef.nativeElement.offsetTop
      }
    });

    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.isDragging) {
        this.elementRef.nativeElement.style.left = `${e.clientX - this.offset.x}px`;
        this.elementRef.nativeElement.style.top = `${e.clientY - this.offset.y}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      if (this.isDragging) {
        this.isDragging = false;
      }
    });
  }
}
