import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { Programs } from '../../../interfaces/open-programs.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'start-item',
  imports: [],
  templateUrl: './start-item.component.html',
  styleUrl: './start-item.component.scss',
})
export class StartItemComponent {
  @Input({ alias: 'focus-name' }) public focusName: string;
  @Input({ alias: 'icon' }) public src: string;
  @Input({ alias: 'program-name' }) public programName: string;

  @ViewChild('startItem') private startItemRef!: ElementRef;

  private store: AppService = inject(AppService);
  private item: HTMLElement;

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  private programDetails: Programs;

  ngAfterViewInit() {
    this.item = this.startItemRef.nativeElement;
  }

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
  public clickHandler(event: MouseEvent): void {
    event?.stopPropagation();

    if (!this.store.openPrograms().some((programs) => programs.focusName === this.focusName)) {
      this.store.openPrograms().push(this.programDetails);
    }

    this.store.focus.set(this.focusName);

    const CURRENT_PARAMS: Params = { ...this.route.snapshot.queryParams }
    CURRENT_PARAMS[this.focusName] = "";

    this.router.navigate(['programs'], {
      relativeTo: this.route,
      queryParams: CURRENT_PARAMS,
      replaceUrl: true,
    })
  }
}
