import { Component, ElementRef, inject, Input, Renderer2, effect, ViewChild, signal, WritableSignal } from '@angular/core';
import { AppService } from '../../app/app.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'window-frame',
  imports: [NgIf],
  templateUrl: './window-frame.component.html',
  styleUrl: './window-frame.component.scss'
})
export class WindowFrameComponent {

  /**
   * @description prevents movement, resizing, and hides minimize & view buttons
   */
  @Input() alert: boolean = false;

  @Input({alias: 'focus-name'}) focusName: string;
  @Input({alias: 'window-title'}) title: string;
  @Input({alias: 'window-icon'}) icon: string;

  @ViewChild('viewButton') viewButtonRef!: ElementRef;
  @ViewChild('minimizeButton') minimizeButtonRef!: ElementRef;

  // Element control
  private store: AppService = inject(AppService);
  private renderer: Renderer2 = inject(Renderer2);
  private elementRef: ElementRef = inject(ElementRef);

  // Buttons
  private viewItem: HTMLElement;
  private minimizeItem: HTMLElement;

  // Logic checks
  private isFullSize: boolean = false;
  private isDragging: boolean = false;
  private isResizing: boolean = false;

  // Size & placement
  private offset = { x: 0, y: 0 };
  private dimensions = {
    width: this.elementRef.nativeElement.offsetWidth,
    height: this.elementRef.nativeElement.offsetHeight,
  }

  private coordinates = { // TODO this may not be needed
    top: this.elementRef.nativeElement.offsetTop,
    left: this.elementRef.nativeElement.offsetLeft
  }

  public isElementFocused: WritableSignal<boolean> = signal(false);

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
      this.setupResizable();
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

  /**
   * @description handle minimizing program
   */
  minimizeButtonHandler() {

  }

  /**
   * @description handle changing between window & full screen mode
   */
  viewButtonHandler() {
    if (!this.isFullSize) {
      // TODO fix for border calculations
      console.debug(this.dimensions) // TODO remove when done
      this.elementRef.nativeElement.style.width = '100%';
      this.elementRef.nativeElement.style.height = '100%';
    }
    else {
      this.elementRef.nativeElement.style.width = `${this.dimensions.width}px`;
      this.elementRef.nativeElement.style.height = `${this.dimensions.height}px`;
    }

    this.isFullSize = !this.isFullSize;
  }

  /**
   * @description handles close button functionality
   */
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

  /**
   * @description handles resizing of window-frame
   */
  private setupResizable() {
    const resizeHandle = this.renderer.createElement('div');
    this.renderer.addClass(resizeHandle, 'resize-handle');
    this.renderer.appendChild(this.elementRef.nativeElement, resizeHandle);

    resizeHandle.addEventListener('mousedown', (e: MouseEvent) => {
      this.isResizing = true;
      e.stopPropagation();
    });

    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.isResizing) {
        this.elementRef.nativeElement.style.width = `${e.clientX - this.elementRef.nativeElement.offsetLeft}px`
        this.elementRef.nativeElement.style.height = `${e.clientY - this.elementRef.nativeElement.offsetTop}px`
      }
    });

    document.addEventListener('mouseup', () => {
      this.isResizing = false;
    });
  }
}
