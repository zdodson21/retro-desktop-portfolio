import { Component } from '@angular/core';

@Component({
  selector: 'taskbar-clock',
  standalone: true,
  imports: [],
  templateUrl: './taskbar-clock.component.html',
  styleUrl: './taskbar-clock.component.scss'
})
export class TaskbarClockComponent {
  public clock: string = "";

  constructor() {
    setInterval(() => {
      let time: Date = new Date();
      let halfOfDay: string = "AM";

      let hour: number = time.getHours();
      if (hour > 12) {
        hour -= 12;
        halfOfDay = "PM";
      }

      let minute: any = time.getMinutes();
      if (minute < 10) minute = `0${minute}`;

      this.clock = `${hour.toString()}:${minute} ${halfOfDay}`;
    }, 100);
  }
}
