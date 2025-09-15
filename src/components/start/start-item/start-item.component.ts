import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { Programs } from '../../../interfaces/open-programs.interface';

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

  private programDetails: Programs;

  ngAfterViewInit() {
    this.item = this.startItemRef.nativeElement;
  }

  // TODO this might not be waiting until values are acquired
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
  public clickHandler(event: MouseEvent) {
    event?.stopPropagation();
    // TODO if the same program exists multiple times it is still added multiple times
    if (!this.store.openPrograms().some((programs) => programs.focusName === this.focusName)) {
      this.store.openPrograms().push(this.programDetails);
    }
    console.log(this.store.openPrograms());
    this.store.focus.set(this.focusName);
  }
}
