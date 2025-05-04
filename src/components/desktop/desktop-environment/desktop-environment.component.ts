import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { DesktopIconComponent } from '../desktop-icon/desktop-icon.component';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'desktop-environment',
  imports: [DesktopIconComponent],
  templateUrl: './desktop-environment.component.html',
  styleUrl: './desktop-environment.component.scss',
})
export class DesktopEnvironmentComponent {
  @ViewChild('desktopEnvironment') private desktopEnvironmentRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  ngAfterViewInit() {
    this.item = this.desktopEnvironmentRef.nativeElement;
  }

  public clickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set('desktop-environment');
  }
}
