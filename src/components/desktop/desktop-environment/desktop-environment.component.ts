import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { DesktopIconComponent } from '../desktop-icon/desktop-icon.component';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'desktop-environment',
  imports: [DesktopIconComponent, WindowFrameComponent],
  templateUrl: './desktop-environment.component.html',
  styleUrl: './desktop-environment.component.scss'
})
export class DesktopEnvironmentComponent {
  @ViewChild('desktopEnvironment') desktopEnvironmentRef!: ElementRef;

  private store = inject(AppService);

  clickHandler() {
    const item = this.desktopEnvironmentRef.nativeElement;
    this.store.focus.set(item);
  }
}
