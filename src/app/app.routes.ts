import { Routes } from '@angular/router';
import { ProgramsWrapperComponent } from '../components/programs/programs-wrapper/programs-wrapper.component';
import { InternetExplorerComponent } from '../components/programs/internet-explorer/internet-explorer.component';

export const routes: Routes = [
  { path: 'programs', component: ProgramsWrapperComponent },
  // TODO add internet explorer once other route works (basically just have a git pushed checkpoint),
  // { path: 'internet-explorer', component: InternetExplorerComponent }
];
