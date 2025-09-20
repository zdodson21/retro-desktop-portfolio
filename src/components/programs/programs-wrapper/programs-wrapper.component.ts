import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../app/app.service';
import { SystemMonitorComponent } from '../system-monitor/system-monitor.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-programs-wrapper',
  imports: [SystemMonitorComponent, WelcomeComponent, HelpComponent],
  templateUrl: './programs-wrapper.component.html',
  styleUrl: './programs-wrapper.component.scss',
})
export class ProgramsWrapperComponent {
  /*
    ! Steps to add programs to routes
      1. Import program component (both in TS & Angular imports).
      2. Create variable for program in `programs` object variable. Ensure alphabetical order maintained.
      3. Check for name in params and return value to program variable.
      4. Create an if statement to add program to openPrograms() if it is in params
  */

  /*
    ! Steps to add IE pages to routes
  */

  private store: AppService = inject(AppService);

  public programs = {
    help: false,
    systemMonitor: false,
    welcome: false,
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.programs.help = 'help' in params;
      this.programs.systemMonitor = 'system-monitor' in params;
      this.programs.welcome = 'welcome' in params;

      if ('help' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'help')) {
        this.store.openPrograms().push({
          programName: 'Windows Help',
          focusName: 'help',
          iconPath: 'assets/icons/windows-help.svg',
        });
      }

      if ('system-monitor' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'system-monitor')) {
        this.store.openPrograms().push({
          programName: 'System Monitor',
          focusName: 'system-monitor',
          iconPath: 'assets/icons/system-monitor.svg',
        });
      }

      if ('welcome' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'welcome')) {
        this.store.openPrograms().push({
          programName: 'Welcome',
          focusName: 'welcome',
          iconPath: '',
        });
      }
    });
  }
}
