import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../app/app.service';
import { CalculatorComponent } from '../calculator/calculator.component';
import { ControlPanelComponent } from '../control-panel/control-panel.component';
import { HelpComponent } from '../help/help.component';
import { InternetExplorerComponent } from '../internet-explorer/internet-explorer.component';
import { MyComputerComponent } from '../my-computer/my-computer.component';
import { SystemMonitorComponent } from '../system-monitor/system-monitor.component';
import { TaskbarPropertiesComponent } from '../taskbar-properties/taskbar-properties.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { WindowsExplorerComponent } from '../windows-explorer/windows-explorer.component';
import { ProgramMenuComponent } from '../program-menu/program-menu.component';

@Component({
  selector: 'app-programs-wrapper',
  imports: [
    CalculatorComponent,
    ControlPanelComponent,
    HelpComponent,
    InternetExplorerComponent,
    MyComputerComponent,
    ProgramMenuComponent,
    SystemMonitorComponent,
    TaskbarPropertiesComponent,
    WelcomeComponent,
    WindowsExplorerComponent,
  ],
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

  protected programs = {
    calculator: false,
    controlPanel: false,
    help: false,
    internetExplorer: false,
    myComputer: false,
    programMenu: false,
    systemMonitor: false,
    taskbarProperties: false,
    welcome: false,
    windowsExplorer: false,
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.programs.calculator = 'calculator' in params;
      this.programs.controlPanel = 'control-panel' in params;
      this.programs.help = 'help' in params;
      this.programs.internetExplorer = 'internet-explorer' in params;
      this.programs.myComputer = 'my-computer' in params;
      this.programs.programMenu = 'program-menu' in params;
      this.programs.systemMonitor = 'system-monitor' in params;
      this.programs.taskbarProperties = 'taskbar-properties' in params;
      this.programs.welcome = 'welcome' in params;
      this.programs.windowsExplorer = 'windows-explorer' in params;

      if ('calculator' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'calculator')) {
        this.store.openPrograms().push({
          programName: 'Calculator',
          focusName: 'calculator',
          iconPath: 'assets/icons/calculator.svg',
        });
      }

      if ('control-panel' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'control-panel')) {
        this.store.openPrograms().push({
          programName: 'Control Panel',
          focusName: 'control-panel',
          iconPath: 'assets/icons/control-panel.svg',
        });
      }

      if ('help' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'help')) {
        this.store.openPrograms().push({
          programName: 'Windows Help',
          focusName: 'help',
          iconPath: 'assets/icons/windows-help.svg',
        });
      }

      if (
        'internet-explorer' in params &&
        !this.store.openPrograms().some((programs) => programs.focusName === 'internet-explorer')
      ) {
        this.store.openPrograms().push({
          programName: 'Internet Explorer',
          focusName: 'internet-explorer',
          iconPath: 'assets/icons/internet-explorer.svg',
        });
      }

      if ('my-computer' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'my-computer')) {
        this.store.openPrograms().push({
          programName: 'My Computer',
          focusName: 'my-computer',
          iconPath: 'assets/icons/my-computer.svg',
        });
      }

      if ('program-menu' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'program-menu')) {
        this.store.openPrograms().push({
          programName: 'Mobile Program Menu',
          focusName: 'program-menu',
          iconPath: 'assets/icons/program-folder.svg',
        })
      }

      if ('system-monitor' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'system-monitor')) {
        this.store.openPrograms().push({
          programName: 'System Monitor',
          focusName: 'system-monitor',
          iconPath: 'assets/icons/system-monitor.svg',
        });
      }

      if (
        'taskbar-properties' in params &&
        !this.store.openPrograms().some((programs) => programs.focusName === 'taskbar-properties')
      ) {
        this.store.openPrograms().push({
          programName: 'Taskbar Properties',
          focusName: 'taskbar-properties',
          iconPath: 'assets/icons/taskbar-properties.svg',
        });
      }

      if ('welcome' in params && !this.store.openPrograms().some((programs) => programs.focusName === 'welcome')) {
        this.store.openPrograms().push({
          programName: 'Welcome',
          focusName: 'welcome',
          iconPath: '',
        });

        this.store.focus.set('welcome');
      }

      if (
        'windows-explorer' in params &&
        !this.store.openPrograms().some((programs) => programs.focusName === 'windows-explorer')
      ) {
        this.store.openPrograms().push({
          programName: 'Windows Explorer',
          focusName: 'windows-explorer',
          iconPath: 'assets/icons/windows-explorer.svg',
        });
      }

      // TODO check params, if only one item in params then focus should be set to that item
      // if multiple items, set focus to the last item in params
    });
  }
}
