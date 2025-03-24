import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'alert-shutdown',
  imports: [WindowFrameComponent],
  templateUrl: './alert-shutdown.component.html',
  styleUrl: './alert-shutdown.component.scss'
})
export class AlertShutdownComponent {
  @ViewChild('alertShutdown') alertShutdownRef!: ElementRef;

  private store = inject(AppService);
  private item: any;

  ngAfterViewInit() {
    this.item = this.alertShutdownRef.nativeElement;
  }

  constructor() {

  }

  formSubmit(event: any) {
    event.preventDefault();

  }
}
