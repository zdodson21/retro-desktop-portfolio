import { Component, effect, ElementRef, inject, Input, signal, ViewChild, WritableSignal } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../../../app/app.service';
import { Programs } from '../../../interfaces/open-programs.interface';

@Component({
  selector: 'desktop-icon',
  imports: [],
  templateUrl: './desktop-icon.component.html',
  styleUrl: './desktop-icon.component.scss',
})
export class DesktopIconComponent {
  @Input({ alias: 'icon-src' }) public src: string;
  @Input({ alias: 'icon-text' }) public text: string;
  @Input({ alias: 'icon-focus-name' }) public iconFocusName: string;
  @Input({ alias: 'focus-name' }) public focusName: string; // The focus name of the program that opens on double click

  @ViewChild('desktopIcon') private desktopIconRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;
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

  ngAfterViewInit() {
    this.item = this.desktopIconRef.nativeElement;
  }

  public isElementFocused: WritableSignal<boolean> = signal(false);

  constructor() {
    effect(() => {
      if (this.store.focus() !== this.iconFocusName && this.store.focus() !== this.focusName) {
        this.isElementFocused.set(false);
      }
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

    if (!this.store.openPrograms().some((programs) => programs.focusName === this.focusName)) {
      this.store.openPrograms().push(this.programDetails);
    }

    this.store.focus.set(this.focusName);

    const CURRENT_PARAMS: Params = { ...this.route.snapshot.queryParams };
    CURRENT_PARAMS[this.focusName] = '';

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
