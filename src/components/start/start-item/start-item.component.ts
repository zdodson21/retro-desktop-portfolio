import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'start-item',
  imports: [],
  templateUrl: './start-item.component.html',
  styleUrl: './start-item.component.scss'
})
export class StartItemComponent {
  @Input({alias: 'icon'}) src: string;
  @Input({alias: 'text'}) text: string;

  @ViewChild('startItem') startItemRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  ngAfterViewInit() {
    this.item = this.startItemRef.nativeElement;
  }

  constructor() {

  }

  /**
   * @description opens applications with routes
   */
  clickHandler(event: MouseEvent) {
    event?.stopPropagation();
  }
}
