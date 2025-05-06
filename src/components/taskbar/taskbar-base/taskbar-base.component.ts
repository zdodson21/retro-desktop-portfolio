import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { TaskbarClockComponent } from '../taskbar-clock/taskbar-clock.component';
import { TaskbarProgramComponent } from '../taskbar-program/taskbar-program.component';
import { TaskbarStartComponent } from '../taskbar-start/taskbar-start.component';

@Component({
  selector: 'taskbar-base',
  imports: [
    TaskbarClockComponent,
    TaskbarProgramComponent,
    TaskbarStartComponent,
  ],
  templateUrl: './taskbar-base.component.html',
  styleUrl: './taskbar-base.component.scss',
})
export class TaskbarBaseComponent {
  @ViewChild('taskbarBase') taskbarBaseRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  ngAfterViewInit() {
    this.item = this.taskbarBaseRef.nativeElement;
  }

  /**
   * @description sets focus to taskbar base
   */
  clickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set('taskbar-base');
  }
}
