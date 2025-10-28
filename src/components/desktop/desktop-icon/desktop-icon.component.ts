import { Component, effect, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../../../app/app.service';
import { Programs } from '../../../interfaces/open-programs.interface';
import { WindowService } from '../../../services/window/window.service';

@Component({
  selector: 'desktop-icon',
  imports: [],
  templateUrl: './desktop-icon.component.html',
  styleUrl: './desktop-icon.component.scss',
})
export class DesktopIconComponent implements OnInit {
  @Input({ alias: 'icon-src' }) public src: string;
  @Input({ alias: 'icon-text' }) public text: string;
  @Input({ alias: 'icon-focus-name' }) public iconFocusName: string;
  @Input({ alias: 'focus-name' }) public focusName: string; // The focus name of the program that opens on double click

  private store: AppService = inject(AppService);
  private windowService: WindowService = inject(WindowService);
  private programDetails: Programs;

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.programDetails = {
      programName: this.text,
      focusName: this.focusName,
      iconPath: this.src,
    };
  }

  protected isElementFocused: WritableSignal<boolean> = signal(false);

  constructor() {
    effect(() => {
      if (this.store.focus() !== this.iconFocusName && this.store.focus() !== this.focusName) this.isElementFocused.set(false);
    });
  }

  /**
   * @description sets focus on desktop icon
   */
  public singleClickHandler(event: MouseEvent): void {
    event?.stopPropagation();
    this.store.focus.set(this.iconFocusName);
    this.isElementFocused.set(true);
  }

  /**
   * @description opens applicable program / site / file
   */
  public dblClickHandler(event: MouseEvent): void {
    event?.stopPropagation();

    if (!this.windowService.openPrograms().some((programs) => programs.focusName === this.focusName)) {
      this.windowService.openPrograms().push(this.programDetails);
    }

    this.store.focus.set(this.focusName);

    const CURRENT_PARAMS: Params = { ...this.route.snapshot.queryParams };
    if (this.focusName === 'internet-explorer') {
      CURRENT_PARAMS['internet-explorer'] = 'about-me';
    } else {
      CURRENT_PARAMS[this.focusName] = '';
    }

    this.router.navigate(['programs'], {
      relativeTo: this.route,
      queryParams: CURRENT_PARAMS,
      replaceUrl: true,
    });

    this.isElementFocused.set(true);

    setTimeout(() => {
      this.isElementFocused.set(false);
    }, 100);
  }
}
