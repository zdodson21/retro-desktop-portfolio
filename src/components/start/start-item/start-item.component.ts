import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'start-item',
  imports: [],
  templateUrl: './start-item.component.html',
  styleUrl: './start-item.component.scss'
})
export class StartItemComponent {
  @Input({alias: 'icon'}) public src: string;
  @Input({alias: 'text'}) public text: string;

  @ViewChild('startItem') private startItemRef!: ElementRef;

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
  public clickHandler(event: MouseEvent) {
    event?.stopPropagation();
  }
}
