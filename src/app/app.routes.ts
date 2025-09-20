import { Routes } from '@angular/router';
import { ProgramsWrapperComponent } from '../components/programs/programs-wrapper/programs-wrapper.component';
import { InternetExplorerComponent } from '../components/programs/internet-explorer/internet-explorer.component';

export const routes: Routes = [
  { path: 'programs', component: ProgramsWrapperComponent },
  // TODO want internet explorer to be a param in the path above
  // Ex: `programs?internet-explorer="about-me"&system-monitor=`
];
