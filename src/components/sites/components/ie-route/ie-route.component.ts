import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { InternetExplorerService } from '../../../programs/internet-explorer/internet-explorer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsService } from '../../../../services/settings/settings.service';

@Component({
  selector: 'ie-route',
  imports: [],
  templateUrl: './ie-route.component.html',
  styleUrl: './ie-route.component.scss',
})
export class IeRouteComponent implements AfterViewInit, OnInit {
  @ViewChild('a') private a?: ElementRef<HTMLAnchorElement>;

  @Input({ alias: 'domain', required: true }) public domain: string;
  @Input({ alias: 'tld', required: true }) public tld: string;
  @Input({ alias: 'not-in-site' }) public notInSite: boolean = false;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
  private settings: SettingsService = inject(SettingsService);
  private prevValue: string;
  protected visited: boolean = false;
  protected stringArray: string | null = localStorage.getItem(this.settings.localStorageValues[2]);
  protected convertedArray: Array<string>;

  /**
   * @description set status bar content to href
   */
  protected hover(): void {
    if (!this.notInSite) {
      this.prevValue = this.IEService.statusBarContent();
      this.IEService.statusBarContent.set(`http://${this.domain}.${this.tld}`);
    }
  }

  ngOnInit(): void {
    try {
      this.convertedArray = this.stringArray ? JSON.parse(this.stringArray) : [];
    } catch (e) {
      console.warn(`Stored value was not valid JSON: ${e}`);
    }
  }

  ngAfterViewInit(): void {
    if (this.a?.nativeElement.innerText === '') {
      this.a.nativeElement.innerText = `http://${this.domain}.${this.tld}`;
    }

    if (this.convertedArray.includes(this.domain)) this.visited = true;
  }

  /**
   * @description set status bar content value to previous (pre-hover) value
   */
  protected unhover(): void {
    if (!this.notInSite) {
      if (this.IEService.statusBarIcon() !== 'assets/icons/html-file.svg')
        this.IEService.statusBarIcon.set('assets/icons/html-file.svg');

      if (this.prevValue === '' || this.prevValue === this.IEService.copyText) {
        // TODO issue here with improper text displaying when hovering over numerous items
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
    this.setVisited();

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { 'internet-explorer': this.domain },
      queryParamsHandling: 'merge',
    });

    this.unhover();
  }

  /**
   * @description sets visited value in local storage and in component scope
   */
  protected setVisited(): void {
    if (!this.notInSite) {
      if (!this.visited) this.visited = true;
      if (!this.convertedArray.includes(this.domain)) this.convertedArray.push(this.domain);
      this.stringArray = JSON.stringify(this.convertedArray);
      localStorage.setItem(this.settings.localStorageValues[2], this.stringArray);
    }
  }
}
