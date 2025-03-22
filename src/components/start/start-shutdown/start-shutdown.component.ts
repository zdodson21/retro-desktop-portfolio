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

  private store = inject(AppService);
  private item: any;

  ngAfterViewInit() {
    this.item = this.startShutdownRef.nativeElement;
  }

  constructor() {

  }

  clickHandler(event: MouseEvent) {
    event?.stopPropagation();

    
  }
}
