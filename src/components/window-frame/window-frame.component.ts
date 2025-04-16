import { Component, ElementRef, inject, Input, Renderer2, effect, ViewChild } from '@angular/core';
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
    switch (this.focusName) {
      case "shutdown-alert":
        this.store.showShutdownAlert.set(false);
        break;
      default:
        console.error(`Cannot close focus-name: ${this.focusName}`);
    }
  }

}
