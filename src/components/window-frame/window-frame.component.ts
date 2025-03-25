import { Component, ElementRef, inject, Input, Renderer2, effect, ViewChild } from '@angular/core';

@Component({
  selector: 'window-frame',
  imports: [],
  templateUrl: './window-frame.component.html',
  styleUrl: './window-frame.component.scss'
})
export class WindowFrameComponent {
  // TODO add support for removing movability and resizeability, mainly for alerts (lock attribute)
  // Use start menu renderer as reference, along with taskbar-program for attribute setting

  @Input() alert = false; // will hide the minimize and view buttons, also prevents movement
  @Input({alias: 'focus-name'}) focusName: string;
  @Input({alias: 'window-title'}) title: string;

  @ViewChild('viewButton') viewButtonRef!: ElementRef;
  @ViewChild('minimizeButton') minimizeButtonRef!: ElementRef;

  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);

  private viewItem: any;
  private minimizeItem: any;

  ngAfterViewInit() {
    this.viewItem = this.viewButtonRef.nativeElement;
    this.minimizeItem = this.minimizeButtonRef.nativeElement;

    if (this.alert) {
      console.log('Alert is true')
      this.viewItem.classList.add('hide-button');
      this.minimizeItem.classList.add('hide-button')
    }
  }

  constructor() {

  }

  minimizeButtonHandler() {

  }

  viewButtonHandler() {

  }

  closeButtonHandler() {

  }

}
