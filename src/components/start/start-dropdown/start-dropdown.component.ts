import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'start-dropdown',
  imports: [],
  templateUrl: './start-dropdown.component.html',
  styleUrl: './start-dropdown.component.scss'
})
export class StartDropdownComponent {
  @Input({alias: 'icon'}) public src: string;
  @Input({alias: 'text'}) public text: string;

  @ViewChild('startDropdown') private startDropdownRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  ngAfterViewInit() {
    this.item = this.startDropdownRef.nativeElement;
  }

  constructor() {

  }

  /**
   * @description start-dropdown hover handler
   */
  public hoverHandler() {

  }
}
