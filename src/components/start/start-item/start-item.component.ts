import { Component, Input, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { Programs } from '../../../interfaces/open-programs.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WindowService } from '../../../services/window/window.service';

@Component({
  selector: 'start-item',
  imports: [],
  templateUrl: './start-item.component.html',
  styleUrl: './start-item.component.scss',
})
export class StartItemComponent {
  @Input({ alias: 'icon', required: true }) public src: string;
  @Input({ alias: 'focus-name', required: true }) public focusName: string;
  @Input({ alias: 'program-name', required: true }) public programName: string;
  @Input({ alias: 'in-program' }) public inProgram: boolean;

  private store: AppService = inject(AppService);
  private windowService: WindowService = inject(WindowService);

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  private programDetails: Programs;

  ngOnInit() {
    this.programDetails = {
      programName: this.programName,
      focusName: this.focusName,
      iconPath: this.src,
    };
  }

  /**
   * @description opens applications with routes
   */
  protected clickHandler(event: MouseEvent): void {
    event?.stopPropagation();

    if (!this.windowService.openPrograms().some((programs) => programs.focusName === this.focusName)) {
      this.windowService.openPrograms().push(this.programDetails);
    }

    const CURRENT_PARAMS: Params = { ...this.route.snapshot.queryParams };

    if (this.focusName === 'internet-explorer') {
      CURRENT_PARAMS['internet-explorer'] = 'about-me';
    } else {
      CURRENT_PARAMS[this.focusName] = '';
    }

    if (!this.inProgram) {
      this.router.navigate(['programs'], {
        relativeTo: this.route,
        queryParams: CURRENT_PARAMS,
        replaceUrl: true,
      });
    } else {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: CURRENT_PARAMS,
        replaceUrl: true,
      });
    }

    this.store.focus.set(this.focusName);
  }
}
