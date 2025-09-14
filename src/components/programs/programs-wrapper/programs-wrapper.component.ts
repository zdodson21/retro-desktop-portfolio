import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../app/app.service';
import { SystemMonitorComponent } from '../system-monitor/system-monitor.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-programs-wrapper',
  imports: [SystemMonitorComponent, WelcomeComponent],
  templateUrl: './programs-wrapper.component.html',
  styleUrl: './programs-wrapper.component.scss',
})
export class ProgramsWrapperComponent {
  /*
    ! Steps to add programs to routes
      1. Import program component (both in TS & Angular imports).
      2. Create variable for program in `programs` object variable. Ensure alphabetical order maintained.
      3. Check for program focus-name in params. Ensure alphabetical order maintained.
        routing instead of UI it is added
  */

  /*
    ! Steps to add IE pages to routes
  */

  private store: AppService = inject(AppService);

  public programs = {
    systemMonitor: false,
    welcome: false,
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.programs.systemMonitor = 'system-monitor' in params;
      this.programs.welcome = 'welcome' in params;

      if (
        'system-monitor' in params &&
        !this.store
          .openPrograms()
          .some((programs) => programs.focusName === 'system-monitor')
      ) {
        this.store.openPrograms().push({
          programName: 'System Monitor',
          focusName: 'system-monitor',
          iconPath: 'assets/icons/system-monitor.svg',
        });
      }

      if (
        'welcome' in params &&
        !this.store
          .openPrograms()
          .some((programs) => programs.focusName === 'welcome')
      ) {
        this.store.openPrograms().push({
          programName: 'Welcome',
          focusName: 'welcome',
          iconPath: '',
        });
      }
    });
  }
}
