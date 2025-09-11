import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemMonitorComponent } from '../system-monitor/system-monitor.component';
import { ZachDodsonComponent } from '../zach-dodson/zach-dodson.component';

@Component({
  selector: 'app-programs-wrapper',
  imports: [SystemMonitorComponent, ZachDodsonComponent],
  templateUrl: './programs-wrapper.component.html',
  styleUrl: './programs-wrapper.component.scss',
})
export class ProgramsWrapperComponent {
  /*
    ! Steps to add programs to routes
      1. Import program component (both in TS & Angular imports).
      2. Create variable for program in `programs` object variable. Ensure alphabetical order maintained.
      3. Check for program focus-name in params. Ensure alphabetical order maintained.
      ? 4. Maybe need to update openPrograms array if item doesn't exist, mainly so if user goes to program through
        routing instead of UI it is added
  */

  /*
    ! Steps to add IE pages to routes
  */

  public programs = {
    systemMonitor: false,
    zachDodson: false,
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.programs.systemMonitor = 'system-monitor' in params;
      this.programs.zachDodson = 'zach-dodson' in params;
    });

    // TODO next step => openPrograms needs to be updated based on what values are true here
  }
}
