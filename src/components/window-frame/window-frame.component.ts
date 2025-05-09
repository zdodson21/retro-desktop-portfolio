import { NgIf } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  Input,
  Renderer2,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'window-frame',
  imports: [NgIf],
  templateUrl: './window-frame.component.html',
  styleUrl: './window-frame.component.scss',
})
export class WindowFrameComponent {
  /**
   * @description prevents movement, resizing, and hides minimize & view buttons when true
   */
  @Input() public alert: boolean = false;

  @Input({ alias: 'focus-name' }) public focusName: string;
  @Input({ alias: 'window-title' }) public title: string;
  @Input({ alias: 'window-icon' }) public icon: string;

  @ViewChild('viewButton') private viewButtonRef!: ElementRef;
  @ViewChild('minimizeButton') private minimizeButtonRef!: ElementRef;
  @ViewChild('wrapper') private wrapperRef!: ElementRef;

  // Element control
  private store: AppService = inject(AppService);
  private renderer: Renderer2 = inject(Renderer2);
  private elementRef: ElementRef = inject(ElementRef);

  public isElementFocused: WritableSignal<boolean> = signal(false);

  // Buttons
  private viewItem: HTMLElement;
  private minimizeItem: HTMLElement;

  private isMinimized: boolean = false;
  private isFullSize: boolean = false;

  public viewIcon = 'assets/icons/view-maximize.svg';

  // Window management checks
  private isDragging: boolean = false;
  private isResizing: boolean = false;

  // Size & placement
  private offset = { x: 0, y: 0 };

  private dimensions = {
    width: this.elementRef.nativeElement.offsetWidth,
    height: this.elementRef.nativeElement.offsetHeight,
  };

  /**
    @description dimensions recorded when entering full screen for comparison when exiting full screen
  */
  private viewportRecorder = {
    width: this.store.viewportWidth(),
    height: this.store.viewportHeight(),
  };

  private windowCoordinates = {
    top: 0,
    left: 0,
  };

  ngAfterViewInit() {
    this.viewItem = this.viewButtonRef.nativeElement;
    this.minimizeItem = this.minimizeButtonRef.nativeElement;

    if (this.alert) {
      this.viewItem.classList.add('hide-button');
      this.minimizeItem.classList.add('hide-button');
      this.isElementFocused.set(true);
    } else {
      this.setupDraggable();
    }
  }

  constructor() {
    effect(() => {
      if (!this.alert) {
        if (this.store.focus() == this.focusName) {
          this.isElementFocused.set(true);
        } else {
          this.isElementFocused.set(false);
        }
      }
    });
  }

  /**
   * @description handle minimizing program
   */
  public minimizeButtonHandler() {
    // TODO use `this.isMinimized` variable
  }

  /**
   * @description handle changing between window & full screen mode
   */
  public viewButtonHandler() {
    // TODO:
    // * Set new width and height based on the new viewport size to same percentage
    // * Planned always-on-screen safety system should be able to make sure the item stays on screen, this should be its own function

    if (!this.isFullSize) {
      // going into full screen
      this.windowCoordinates = {
        top: this.elementRef.nativeElement.offsetTop,
        left: this.elementRef.nativeElement.offsetLeft,
      };

      this.viewportRecorder = {
        width: this.store.viewportWidth(),
        height: this.store.viewportHeight(),
      };

      this.viewIcon = 'assets/icons/close-button.svg'; // TODO placeholder

      this.wrapperRef.nativeElement.classList.add('full-view');

      this.helpSetFullSize();
    } else {
      // exiting full screen
      this.viewIcon = 'assets/icons/view-maximize.svg';

      this.wrapperRef.nativeElement.classList.remove('full-view');

      if (
        this.store.viewportWidth() !== this.viewportRecorder.width ||
        this.store.viewportHeight() !== this.viewportRecorder.height
      ) {
        // * Calculate window width as a percentage (I think it should be window width / recorded viewport width = % of screen taken)
        // * Calculate window height as a percentage (same as above)
        // * Calculate what the new window width should be (current viewport width * %)
        // * Calculate what the new window height should be (same as above)
        // * set this.dimensions to new width & height, should be all set below at CSS setting
      }

      this.elementRef.nativeElement.style.width = `${this.dimensions.width}px`;
      this.elementRef.nativeElement.style.height = `${this.dimensions.height}px`;
      this.elementRef.nativeElement.style.top = `${this.windowCoordinates.top}px`;
      this.elementRef.nativeElement.style.left = `${this.windowCoordinates.left}px`;
    }

    this.isFullSize = !this.isFullSize;
  }

  /**
   * @description maintains a full size program window even when browser size is changed
   */
  @HostListener('window:resize')
  private helpMaintainSize() {
    if (this.isFullSize) {
      this.helpSetFullSize();
    } else {
      // TODO resize window when viewport changes; should be similar math to above exiting full screen adapted for constant change
      // Calculate width and height to figure out percent of screen taken compared to viewportRecorder
      // Figure out pixel value based on current viewport and percentage
    }

    this.helpStayInViewport();
  }

  /**
   * @description sets window to full size
   */
  private helpSetFullSize() {
    this.elementRef.nativeElement.style.width = '100.01%'; // ! 100.01% removes slivers of background in some browsers (Firefox)
    this.elementRef.nativeElement.style.height = `100.01%`;
    this.elementRef.nativeElement.style.top = `${this.store.viewportHeight() / 2 - 22}px`;
    this.elementRef.nativeElement.style.left = `${this.store.viewportWidth() / 2}px`;
  }

  /**
   * @description handles close button functionality
   */
  public closeButtonHandler() {
    if (this.focusName === 'shutdown-alert') {
      this.store.showShutdownAlert.set(false);
    } else {
      console.error(`Cannot close focus-name: ${this.focusName}`);
    }
  }

  /**
   * @description Sets focus to clicked window
   * @param event MouseEvent
   */
  public setFocus(event?: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set(this.focusName);
  }

  private helpStayInViewport() {
    const FRAME = {
      x: + this.elementRef.nativeElement.style.left.split('p')[0],
      y: + this.elementRef.nativeElement.style.top.split('p')[0],
      width: this.elementRef.nativeElement.offsetWidth,
      height: this.elementRef.nativeElement.offsetHeight,
    };

    // TODO bug causes window-frame to move to top left corner on first click, avoided if clicked and dragged
    // Caused when window-frame is positioned using percentages, causing x & y to = '';

    if ((FRAME.x + FRAME.width / 2) > this.store.viewportWidth()) { // Right
      this.elementRef.nativeElement.style.left = `${this.store.viewportWidth() - FRAME.width / 2}px`;
    }

    if ((FRAME.x - FRAME.width / 2) < 0) { // Left
      this.elementRef.nativeElement.style.left = `${0 + FRAME.width / 2}px`
    }

    if ((FRAME.y + FRAME.height / 2 + 44) > this.store.viewportHeight()) { // Bottom
      this.elementRef.nativeElement.style.top = `${this.store.viewportHeight() - FRAME.height / 2 - 44}px`
    }

    if (FRAME.y - FRAME.height / 2 < 0) { // Top
      this.elementRef.nativeElement.style.top = `${0 + FRAME.height / 2}px`
    }
  }

  /**
   * @description handles dragging events to move window around
   */
  private setupDraggable() {
    const PANEL_LEFT_SIDE =
      this.elementRef.nativeElement.querySelector('.left-side');

    PANEL_LEFT_SIDE.addEventListener('mousedown', (e: MouseEvent) => {
      this.setFocus();

      if (!this.isFullSize) this.isDragging = true;

      this.offset = {
        x: e.clientX - this.elementRef.nativeElement.offsetLeft,
        y: e.clientY - this.elementRef.nativeElement.offsetTop,
      };
    });

    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.isDragging) {
        this.elementRef.nativeElement.style.left = `${e.clientX - this.offset.x}px`;
        this.elementRef.nativeElement.style.top = `${e.clientY - this.offset.y}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      if (this.isDragging) {
        this.helpStayInViewport();

        this.isDragging = false;
      }
    });
  }
}
