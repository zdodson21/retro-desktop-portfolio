import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'start-dropdown',
  imports: [],
  templateUrl: './start-dropdown.component.html',
  styleUrl: './start-dropdown.component.scss'
})
export class StartDropdownComponent {
  @Input({alias: 'icon'}) src: string;
  @Input({alias: 'text'}) text: string;

  @ViewChild('startDropdown') startDropdownRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  ngAfterViewInit() {
    this.item = this.startDropdownRef.nativeElement;
  }

  constructor() {

  }

  hoverHandler() {

  }
}
