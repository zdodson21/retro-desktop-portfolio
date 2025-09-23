import { Component, effect, ElementRef, HostListener, inject, Input, Renderer2, signal, ViewChild, WritableSignal } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'window-frame',
  imports: [],
  templateUrl: './window-frame.component.html',
  styleUrl: './window-frame.component.scss',
})
export class WindowFrameComponent {
  /**
   * @description prevents movement, resizing, and hides minimize & view buttons when true
   */
  @Input({ alias: 'alert' }) public isAlert: boolean = false;
  @Input({ alias: 'hide-buttons' }) public hideButtons: boolean = false;
  @Input({ alias: 'prevent-resizing' }) public preventResizing: boolean = false;

  @Input({ alias: 'focus-name' }) public focusName: string;
  @Input({ alias: 'window-title' }) public title: string;
  @Input({ alias: 'window-icon' }) public icon: string;
  @Input({ alias: 'percent-height' }) public percentHeight: number;
  @Input({ alias: 'percent-width' }) public percentWidth: number;

  @ViewChild('viewButton') private viewButtonRef!: ElementRef;
  @ViewChild('minimizeButton') private minimizeButtonRef!: ElementRef;
  @ViewChild('wrapper') private wrapperRef!: ElementRef;

  // Element control
  private store: AppService = inject(AppService);
  private renderer: Renderer2 = inject(Renderer2);
  private elementRef: ElementRef = inject(ElementRef);

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  public isElementFocused: WritableSignal<boolean> = signal(false);
  public isElementMinimized: WritableSignal<boolean> = signal(false);

  // Buttons
  private viewItem: HTMLElement;
  private minimizeItem: HTMLElement;

  private isMinimized: boolean = false;
  public isFullSize: boolean = false;

  public viewIcon = 'assets/icons/maximize-button.svg';

  // Window management checks
  private isDragging: boolean = false;
  private isResizing: boolean = false;

  // Size & placement
  private offset = { x: 0, y: 0 };

  private windowCoordinates = {
    top: 0,
    left: 0,
  };

  ngAfterContentInit() {
    if (this.isAlert) {
      this.hideButtons = true;
      this.isElementFocused.set(true);
    } else {
      this.setupDraggable();
    }

    if (this.preventResizing) this.viewIcon = 'assets/icons/faded-maximize-button.svg'

    // Immediately sets offset, preventing a bug when clicking on a window-frame after the page loads,
    // which would cause it to jump into the top left corner of the viewport.
    this.windowCoordinates = {
      top: this.elementRef.nativeElement.offsetTop,
      left: this.elementRef.nativeElement.offsetLeft,
    };

    this.elementRef.nativeElement.style.top = `${this.windowCoordinates.top}px`;
    this.elementRef.nativeElement.style.left = `${this.windowCoordinates.left}px`;
  }

  constructor() {
    effect(() => {
      if (!this.isAlert) {
        if (this.store.focus() == this.focusName) {
          this.isElementFocused.set(true);
          this.renderer.addClass(this.elementRef.nativeElement, 'active');

          if (this.store.minimizedPrograms().includes(this.focusName)) {
            this.store.minimizedPrograms().splice(this.store.minimizedPrograms().indexOf(this.focusName), 1);
            this.isElementMinimized.set(false);
          }
        } else {
          this.isElementFocused.set(false);
          this.renderer.removeClass(this.elementRef.nativeElement, 'active');
        }
      }
    });
  }

  /**
   * @description handle minimizing program
   * @param event MouseEvent
   */
  public minimizeButtonHandler(event?: MouseEvent): void {
    event?.stopPropagation();

    if (!this.store.minimizedPrograms().includes(this.focusName)) {
      this.isMinimized = true;
      this.store.minimizedPrograms().push(this.focusName);
    }

    if (this.store.minimizedPrograms().includes(this.focusName)) {
      this.store.focus.set('');
      this.isElementMinimized.set(true);
    }
  }

  /**
   * @description handle changing between window & full screen mode
   */
  public viewButtonHandler(): void {
    if (!this.isFullSize) {
      // going into full screen
      this.windowCoordinates = {
        top: this.elementRef.nativeElement.offsetTop,
        left: this.elementRef.nativeElement.offsetLeft,
      };

      this.viewIcon = 'assets/icons/restore-button.svg';

      this.wrapperRef.nativeElement.classList.add('full-view');

      this.helpSetFullSize();
    } else {
      // exiting full screen
      this.viewIcon = 'assets/icons/maximize-button.svg';

      this.wrapperRef.nativeElement.classList.remove('full-view');

      this.setWindowSize();

      this.elementRef.nativeElement.style.top = `${this.windowCoordinates.top}px`;
      this.elementRef.nativeElement.style.left = `${this.windowCoordinates.left}px`;
    }

    this.isFullSize = !this.isFullSize;

    this.helpStayInViewport();
  }

  /**
   * @description maintains a full size program window even when browser size is changed
   */
  @HostListener('window:resize')
  private helpMaintainSize(): void {
    if (this.isFullSize) this.helpSetFullSize();
    if (!this.isFullSize) this.setWindowSize();

    this.helpStayInViewport();
  }

  private setWindowSize(): void {
    if (this.store.viewportWidth() > this.store.viewportHeight()) {
      this.elementRef.nativeElement.style.width = `${this.percentWidth}%`;
      this.elementRef.nativeElement.style.height = `${this.percentHeight}%`;
    } else {
      this.elementRef.nativeElement.style.width = `${this.store.mobilePercents.width}%`;
      this.elementRef.nativeElement.style.height = `${this.store.mobilePercents.height}%`;
    }
  }

  /**
   * @description sets program window to full size
   */
  private helpSetFullSize(): void {
    this.elementRef.nativeElement.style.width = '100.01%'; // ! 100.01% removes slivers of background in some browsers (Firefox)
    this.elementRef.nativeElement.style.height = `100.01%`;
    this.elementRef.nativeElement.style.top = `${this.store.viewportHeight() / 2 - 22}px`;
    this.elementRef.nativeElement.style.left = `${this.store.viewportWidth() / 2}px`;
  }

  /**
   * @description handles close button functionality
   * @param event MouseEvent
   */
  public closeButtonHandler(event?: MouseEvent): void {
    event?.stopPropagation();
    this.store.focus.set('');

    const INDEX = this.store.openPrograms().findIndex((program) => program.focusName === this.focusName);

    if (INDEX !== -1) {
      this.store.openPrograms().splice(INDEX, 1);
    }

    const CURRENT_PARAMS: Params = { ...this.route.snapshot.queryParams };
    delete CURRENT_PARAMS[this.focusName];

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: CURRENT_PARAMS,
      replaceUrl: true,
    });
  }

  /**
   * @description Sets focus to clicked window
   * @param event MouseEvent
   */
  public setFocus(event?: MouseEvent): void {
    event?.stopPropagation();
    this.store.focus.set(this.focusName);
  }

  /**
   * @description Prevents program window from being placed outside of viewport area by repositioning
   * it back within the viewport if placed outside of it.
   */
  private helpStayInViewport(): void {
    const FRAME = {
      x: +this.elementRef.nativeElement.style.left.split('p')[0], // gets the CSS value, then splits and gets the px value (without the px)
      y: +this.elementRef.nativeElement.style.top.split('p')[0],
      width: this.elementRef.nativeElement.offsetWidth,
      height: this.elementRef.nativeElement.offsetHeight,
    };

    // Right side of viewport
    if (FRAME.x + FRAME.width / 2 > this.store.viewportWidth()) {
      this.elementRef.nativeElement.style.left = `${this.store.viewportWidth() - FRAME.width / 2}px`;
    }

    // Left side of viewport
    if (FRAME.x - FRAME.width / 2 < 0) {
      this.elementRef.nativeElement.style.left = `${0 + FRAME.width / 2}px`;
    }

    // Bottom of viewport
    if (FRAME.y + FRAME.height / 2 + 44 > this.store.viewportHeight()) {
      this.elementRef.nativeElement.style.top = `${this.store.viewportHeight() - FRAME.height / 2 - 44}px`;
    }

    // Top of viewport
    if (FRAME.y - FRAME.height / 2 < 0) {
      this.elementRef.nativeElement.style.top = `${0 + FRAME.height / 2}px`;
    }
  }

  /**
   * @description handles dragging events to move window around
   */
  private setupDraggable(): void {
    const PANEL_LEFT_SIDE = this.elementRef.nativeElement.querySelector('.left-side');

    // ! Mouse Events
    PANEL_LEFT_SIDE.addEventListener('mousedown', (e: MouseEvent) => {
      this.handleDragStart(e.clientX, e.clientY);
    });

    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.isDragging) {
        this.handleDragMove(e.clientX, e.clientY);
      }
    });

    document.addEventListener('mouseup', () => {
      this.handleDragEnd();
    });

    // ! Touch Events
    PANEL_LEFT_SIDE.addEventListener('touchstart', (e: TouchEvent) => {
      const touch = e.touches[0];
      this.handleDragStart(touch.clientX, touch.clientY);
    });

    document.addEventListener('touchmove', (e: TouchEvent) => {
      if (this.isDragging) {
        const touch = e.touches[0];
        this.handleDragMove(touch.clientX, touch.clientY);
        e.preventDefault(); // Prevent scrolling while dragging
      }
    });

    document.addEventListener('touchend', () => {
      this.handleDragEnd();
    });
  }
  /**
   * @description drag start helper
   * @param clientX x value of touch point
   * @param clientY y value of touch point
   */
  private handleDragStart(clientX: number, clientY: number): void {
    this.setFocus();

    if (!this.isFullSize) {
      this.isDragging = true;
      this.offset = {
        x: clientX - this.elementRef.nativeElement.offsetLeft,
        y: clientY - this.elementRef.nativeElement.offsetTop,
      };
    }
  }

  /**
   * @description drag movement helper
   * @param clientX x value of touch point
   * @param clientY y value of touch point
   */
  private handleDragMove(clientX: number, clientY: number): void {
    this.elementRef.nativeElement.style.left = `${clientX - this.offset.x}px`;
    this.elementRef.nativeElement.style.top = `${clientY - this.offset.y}px`;
    this.helpStayInViewport();
  }

  /**
   * @description drag end helper
   */
  private handleDragEnd(): void {
    if (this.isDragging) {
      this.helpStayInViewport();
      this.isDragging = false;
    }
  }
}
