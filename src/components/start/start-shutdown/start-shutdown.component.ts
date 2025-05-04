import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'start-shutdown',
  imports: [],
  templateUrl: './start-shutdown.component.html',
  styleUrl: './start-shutdown.component.scss',
})
export class StartShutdownComponent {
  @ViewChild('startShutdown') private startShutdownRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  ngAfterViewInit() {
    this.item = this.startShutdownRef.nativeElement;
  }

  constructor() {}

  /**
   * @description shows shutdown alert
   */
  public clickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.showShutdownAlert.set(true);
    this.store.focus.set('shutdown-alert');
  }
}
