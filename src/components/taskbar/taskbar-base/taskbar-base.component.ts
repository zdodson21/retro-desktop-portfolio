import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { TaskbarClockComponent } from '../taskbar-clock/taskbar-clock.component';
import { TaskbarProgramComponent } from '../taskbar-program/taskbar-program.component';
import { TaskbarStartComponent } from '../taskbar-start/taskbar-start.component';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'taskbar-base',
  imports: [TaskbarClockComponent, TaskbarProgramComponent, TaskbarStartComponent],
  templateUrl: './taskbar-base.component.html',
  styleUrl: './taskbar-base.component.scss'
})
export class TaskbarBaseComponent {
  @ViewChild('taskbarBase') taskbarBaseRef!: ElementRef;

  private store = inject(AppService);
  private item: any;

  ngAfterViewInit() {
    this.item = this.taskbarBaseRef.nativeElement;
  }

  clickHandler(event: MouseEvent) {
    event?.stopPropagation();
    this.store.focus.set("taskbar-base");
    this.store.isStartMenuOpen.set(false);
  }
}
