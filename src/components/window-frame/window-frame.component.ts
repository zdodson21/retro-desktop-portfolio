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
  imports: [],
  templateUrl: './window-frame.component.html',
  styleUrl: './window-frame.component.scss',
})
export class WindowFrameComponent {
  /**
   * @description prevents movement, resizing, and hides minimize & view buttons when true
   */
  @Input({ alias: 'alert' }) public isAlert: boolean = false;

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
  public isElementMinimized: WritableSignal<boolean> = signal(false);

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

    if (this.isAlert) {
      this.viewItem.classList.add('hide-button');
      this.minimizeItem.classList.add('hide-button');
      this.isElementFocused.set(true);
    } else {
      this.setupDraggable();
    }

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

          if (this.store.minimizedPrograms().includes(this.focusName)) {
            this.store
              .minimizedPrograms()
              .splice(
                this.store.minimizedPrograms().indexOf(this.focusName),
                1,
              );
            this.isElementMinimized.set(false);
          }
        } else {
          this.isElementFocused.set(false);
        }
      }
    });
  }

  /**
   * @description handle minimizing program
   * @param event MouseEvent
   */
  public minimizeButtonHandler(event?: MouseEvent) {
    event?.stopPropagation();

    if (!this.store.minimizedPrograms().includes(this.focusName)) {
      this.isMinimized = true;
      // this.store.minimizedPrograms.update((arr) => [...arr, this.focusName]);
      this.store.minimizedPrograms().push(this.focusName); // TODO might need to change to work with update instead, depends if system-monitor updates correctly when other programs exist.
    }

    if (this.store.minimizedPrograms().includes(this.focusName)) {
      this.store.focus.set('');
      this.isElementMinimized.set(true);
    }
  }

  /**
   * @description handle changing between window & full screen mode
   */
  public viewButtonHandler() {
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
        // TODO finish all other important TODO items before this, that way irrelevant functions can be hidden in VSCode
        // TODO figure out what exactly I need to do here again, then adjust / make new comments clarifying what needs to be done.
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
      // TODO Try changing viewport height and width and see how it modifies the window-frame component. If no change, change
      // window-frame to full screen, resize viewport, then un-fullscreen. Play with it and figure out what exactly needs to happen.
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
  public closeButtonHandler(event?: MouseEvent) {
    event?.stopPropagation();
    // TODO will have to remove item from router (which should close it?), then set focus to desktop-environment.
    // Removing item from router will make it disappear
    this.store.focus.set('');
    // TODO remove item from "openPrograms" array in the service. Maybe wait to see if this can be done via routing instead.
    if (this.store.focus() === this.focusName)
      console.error(`Cannot close focus-name: ${this.focusName}`);

  }

  /**
   * @description Sets focus to clicked window
   * @param event MouseEvent
   */
  public setFocus(event?: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set(this.focusName);
  }

  /**
   * @description Prevents program window from being placed outside of viewport area by repositioning
   * it back within the viewport if placed outside of it.
   */
  private helpStayInViewport() {
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
