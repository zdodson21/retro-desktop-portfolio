import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { InternetExplorerService } from '../../../programs/internet-explorer/internet-explorer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ie-route',
  imports: [],
  templateUrl: './ie-route.component.html',
  styleUrl: './ie-route.component.scss',
})
export class IeRouteComponent {
  @ViewChild('a') private a?: ElementRef<HTMLElement>;

  @Input({ alias: 'domain', required: true }) public domain: string;
  @Input({ alias: 'tld', required: true }) public tld: string;
  @Input({ alias: 'not-in-site' }) public notInSite: boolean = false;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private IEService: InternetExplorerService = inject(InternetExplorerService);
  private prevValue: string;

  /**
   * @description set status bar content to href
   */
  protected hover(): void {
    if (!this.notInSite) {
      this.prevValue = this.IEService.statusBarContent();
      this.IEService.statusBarContent.set(`http://${this.domain}.${this.tld}`);
    }
  }

  ngAfterViewInit() {
    if (this.a?.nativeElement.innerText === '') {
      this.a.nativeElement.innerText = `http://${this.domain}.${this.tld}`;
    }
  }

  /**
   * @description set status bar content value to previous (pre-hover) value
   */
  protected unhover(): void {
    if (!this.notInSite) {
      if (this.prevValue === '') {
        this.IEService.statusBarContent.set('Ready');
      } else {
        this.IEService.statusBarContent.set(this.prevValue);
      }

      this.prevValue = '';
    }
  }

  /**
   * @description sets route to specified domain in HTML attribute
   */
  protected setRoute(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { 'internet-explorer': this.domain },
      queryParamsHandling: 'merge',
    });

    this.unhover();
  }
}
