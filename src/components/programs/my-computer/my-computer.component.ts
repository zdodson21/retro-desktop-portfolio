import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../../../app/app.service';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';

@Component({
  selector: 'my-computer',
  imports: [WindowFrameComponent],
  templateUrl: './my-computer.component.html',
  styleUrl: './my-computer.component.scss',
})
export class MyComputerComponent {
  protected store: AppService = inject(AppService);

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  /**
   * @description Handles button events. Both buttons pretty much do the same thing, but both are included for UI consistency
   * @param event Mouse click
   */
  protected buttonHelper(event: MouseEvent): void {
    event?.stopPropagation();
    this.store.focus.set('');

    const INDEX = this.store.openPrograms().findIndex((program) => program.focusName === 'my-computer');

    if (INDEX !== -1) {
      this.store.openPrograms().splice(INDEX, 1);
    }

    const CURRENT_PARAMS: Params = { ...this.route.snapshot.queryParams };
    delete CURRENT_PARAMS['my-computer'];

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: CURRENT_PARAMS,
      replaceUrl: true,
    });
  }
}
