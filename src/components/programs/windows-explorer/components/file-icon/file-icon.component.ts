import { Component, effect, inject, Input, signal, WritableSignal } from '@angular/core';
import { WindowsExplorerService } from '../../windows-explorer.service';
import { WindowService } from '../../../../../services/window/window.service';
import { Programs } from '../../../../../interfaces/open-programs.interface';
import { AppService } from '../../../../../app/app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'file-icon',
  imports: [],
  templateUrl: './file-icon.component.html',
  styleUrl: './file-icon.component.scss',
})
export class FileIconComponent {
  @Input({ alias: 'focus-name', required: true }) public focusName: string;
  @Input({ alias: 'assoc-prog-name' }) public associatedProgramName: string;
  @Input({ alias: 'assoc-prog-icon-src' }) public associatedProgramIcon: string;
  @Input({ alias: 'path', required: true }) public path: string;
  @Input({ alias: 'icon-src' }) public src: string; // TODO set this value based on file-type, not user input
  @Input({ alias: 'file-name' }) public fileName: string;
  @Input({ alias: 'file-type' }) public fileType: string;

  private store: AppService = inject(AppService);
  private windowService: WindowService = inject(WindowService);
  private WEService: WindowsExplorerService = inject(WindowsExplorerService);
  protected isElementFocused: WritableSignal<boolean> = signal(false);
  private programDetails: Programs;

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.programDetails = {
      programName: this.associatedProgramName,
      focusName: this.focusName,
      iconPath: this.associatedProgramIcon,
    };
  }

  constructor() {
    effect(() => {
      if (this.WEService.focusedIcon() !== this.fileName) this.isElementFocused.set(false);
    });
  }

  /**
   * @descriptionsets sets focus on desktop icon
   */
  public singleClickHandler(event: MouseEvent): void {
    event?.stopPropagation();
    this.WEService.focusedIcon.set(this.fileName);
    this.isElementFocused.set(true);
  }

  /**
   * @description open applicable file, program, folder
   */
  public dblClickHandler(event: MouseEvent, iconType: string): void {
    event?.stopPropagation;

    if (iconType === 'file') {
      if (!this.windowService.openPrograms().some((programs) => programs.focusName === this.focusName)) {
        this.windowService.openPrograms().push(this.programDetails);
      }

      this.store.focus.set(this.focusName);

      const CURRENT_PARAMS: Params = { ...this.route.snapshot.queryParams };

      if (this.focusName === 'internet-explorer') {
        CURRENT_PARAMS['internet-explorer'] = this.fileName;
      }

      this.router.navigate([], {
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
}
