import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'taskbar-program',
  imports: [],
  templateUrl: './taskbar-program.component.html',
  styleUrl: './taskbar-program.component.scss'
})
export class TaskbarProgramComponent {
  @ViewChild('program') programRef!: ElementRef;
  clicked: boolean = false;

  programHandler() {
    const program = this.programRef.nativeElement;

    if (!this.clicked) {
      program.classList.add('active');
    }
    else {
      program.classList.remove('active');
    }

    this.clicked = !this.clicked;
  }
}
