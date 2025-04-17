import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'start-shutdown',
  imports: [],
  templateUrl: './start-shutdown.component.html',
  styleUrl: './start-shutdown.component.scss'
})
export class StartShutdownComponent {
  @ViewChild('startShutdown') startShutdownRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  ngAfterViewInit() {
    this.item = this.startShutdownRef.nativeElement;
  }

  constructor() {

  }

  clickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.isStartMenuOpen.set(false);
    this.store.showShutdownAlert.set(true);
    this.store.focus.set('shutdown-alert')
  }
}
