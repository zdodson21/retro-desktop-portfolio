import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../app/app.service';
import { DNS, SiteList } from '../../../interfaces/site-list';
import { SettingsService } from '../../../services/settings/settings.service';
import { SystemService } from '../../../services/system/system.service';
import { AboutMeSite } from '../../sites/about-me/about-me.component';
import { CalculatorSiteComponent } from '../../sites/calculator/calculator-site.component';
import { IeRouteComponent } from '../../sites/components/ie-route/ie-route.component';
import { ErrorSite } from '../../sites/error-site/error-site.component';
import { HaxAuditSite } from '../../sites/hax-audit/hax-audit.component';
import { HaxChatAgentSite } from '../../sites/hax-chat-agent/hax-chat-agent.component';
import { OpenSourceContributionsSite } from '../../sites/open-source-contributions/open-source-contributions.component';
import { PyWeatherSite } from '../../sites/py-weather/py-weather.component';
import { RetroDesktopPortfolioSite } from '../../sites/retro-desktop-portfolio/retro-desktop-portfolio.component';
import { SecretSite } from '../../sites/secret-site/secret-site.component';
import { ToolbarButtonComponent } from '../../ui/toolbar/toolbar-button/toolbar-button.component';
import { ToolbarDividerComponent } from '../../ui/toolbar/toolbar-divider/toolbar-divider.component';
import { ToolbarDropoutComponent } from '../../ui/toolbar/toolbar-dropout/toolbar-dropout.component';
import { ToolbarItemComponent } from '../../ui/toolbar/toolbar-item/toolbar-item.component';
import { ToolbarMenuComponent } from '../../ui/toolbar/toolbar-menu/toolbar-menu.component';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { CloseSidebarButtonComponent } from './components/close-sidebar-button/close-sidebar-button.component';
import { StandardButtonComponent } from './components/standard-button/standard-button.component';
import { InternetExplorerService } from './internet-explorer.service';

@Component({
  selector: 'internet-explorer',
  imports: [
    AboutMeSite,
    CalculatorSiteComponent,
    CloseSidebarButtonComponent,
    ErrorSite,
    HaxAuditSite,
    HaxChatAgentSite,
    IeRouteComponent,
    OpenSourceContributionsSite,
    PyWeatherSite,
    RetroDesktopPortfolioSite,
    SecretSite,
    StandardButtonComponent,
    ToolbarButtonComponent,
    ToolbarDividerComponent,
    ToolbarDropoutComponent,
    ToolbarItemComponent,
    ToolbarMenuComponent,
    WindowFrameComponent,
  ],
  templateUrl: './internet-explorer.component.html',
  styleUrl: './internet-explorer.component.scss',
})
export class InternetExplorerComponent implements OnInit, AfterViewInit {
  @ViewChild('windowFrame') private windowFrame?: WindowFrameComponent;
  @ViewChild('addressBarInput') private addressBarInput?: ElementRef<HTMLInputElement>;
  @ViewChild('viewport') protected viewport?: ElementRef<HTMLDivElement>;
  @ViewChild('searchBarInput') private searchBarInput?: ElementRef<HTMLInputElement>;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  protected store: AppService = inject(AppService);
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
  protected systemService: SystemService = inject(SystemService);
  private settings: SettingsService = inject(SettingsService);
  protected sidebarContent: number = 0; // 0 = search, 1 = favorites, 2 = history
  protected statusBarContent: string = 'Ready';
  protected goButtonHovered: boolean = false;
  protected searchResults: DNS = [];
  protected menuFocus: string = '';

  ngOnInit() {
    if (
      localStorage.getItem(this.settings.localStorageValues[1]) === null ||
      localStorage.getItem(this.settings.localStorageValues[1]) === ''
    ) {
      localStorage.setItem(this.settings.localStorageValues[1], 'disabled');
    }

    if (
      localStorage.getItem(this.settings.localStorageValues[2]) === null ||
      localStorage.getItem(this.settings.localStorageValues[2]) === ''
    ) {
      localStorage.setItem(this.settings.localStorageValues[2], '[]');
    }
  }

  ngAfterViewInit() {
    this.route.queryParamMap.subscribe((params) => {
      const IE_PARAM = params.get('internet-explorer');

      if (IE_PARAM && this.dnsContainsSite(IE_PARAM)) {
        this.IEService.displayedSite.set(IE_PARAM);
        this.setWindowTitle(IE_PARAM);
        this.setAddressBar(IE_PARAM, this.getTLD(IE_PARAM));
        this.addToHistory(IE_PARAM, this.getTLD(IE_PARAM));
      } else if (!IE_PARAM) {
        this.IEService.displayedSite.set('');
        this.setWindowTitle('Secret Site');
        this.setAddressBar('', 'secret', true);
      } else if (IE_PARAM === 'error') {
        this.IEService.displayedSite.set('error');
        this.setWindowTitle('Cannot find webpage');
      } else {
        this.IEService.displayedSite.set('error');
        this.setWindowTitle('Cannot find webpage');
        this.setAddressBar(IE_PARAM, 'error');
      }

      this.IEService.statusBarContent.set('Ready');
    });

    if (
      localStorage.getItem(this.settings.localStorageValues[1]) === null ||
      localStorage.getItem(this.settings.localStorageValues[1]) === 'disabled'
    )
      this.IEService.darkMode.set(false);
    else {
      this.IEService.darkMode.set(true);
    }
  }

  /**
   * @description Changes internet-explorer router param
   * @param site site to navigate to
   */
  protected routerNavigator(site: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { 'internet-explorer': site },
      queryParamsHandling: 'merge',
    });
  }

  protected toolbarButtonHelper(event: MouseEvent, button: string): string {
    event?.stopPropagation();
    if (button === 'file' && this.menuFocus === '') return 'file';
    if (button === 'view' && this.menuFocus === '') return 'view';
    if (button === 'favorites' && this.menuFocus === '') return 'favorites';

    return '';
  }

  protected toolbarHoverHelper(button: string): void {
    if (this.menuFocus === 'file' || this.menuFocus === 'view' || this.menuFocus === 'favorites') {
      this.menuFocus = button;
    }
  }

  /**
   * @description navigate "site" content to top of content
   */
  protected refreshButtonHelper(): void {
    if (this.IEService.displayedSite() !== this.parseAddressURL()) {
      this.routerNavigator(this.parseAddressURL());
    } else {
      this.scrollToTop();
    }
  }

  protected scrollToTop(): void {
    this.viewport?.nativeElement.scrollTo(0, 0);
  }

  /**
   * @description sets sidebar open state and displayed content
   * @param contentNum 0 = search | 1 = favorites | 2 = history
   */
  protected openCloseSidebar(contentNum: number, toolbarItem: boolean = false): void {
    if (this.IEService.sidebar() && this.sidebarContent === contentNum) {
      if (!toolbarItem) this.IEService.sidebar.set(false);
    } else {
      this.sidebarContent = contentNum;
      if (!this.IEService.sidebar()) this.IEService.sidebar.set(true);
    }
  }

  /**
   * @description Open user's email client with current URL plus current internet-explorer route. Eliminate other routes for email URL.
   */
  protected mailButtonHelper(): void {
    if (!this.dnsContainsSite(this.IEService.displayedSite())) {
      if (globalThis.confirm('An error page is currently being displayed, are you sure you wish it in an email?')) {
        globalThis.open(
          `mailto:person?subject=Check%20Out%20This%20Webpage&body=${this.systemService.webAddress}/programs?internet-explorer=${this.IEService.displayedSite()}`,
          '_blank',
        );
      }
    } else {
      globalThis.open(
        `mailto:person?subject=Check%20Out%20This%20Webpage&body=${this.systemService.webAddress}/programs?internet-explorer=${this.IEService.displayedSite()}`,
        '_blank',
      );
    }
  }

  /**
   * @description Open browser print dialog to print site content
   */
  protected printButtonHelper(): void {
    globalThis.print();
  }

  /**
   * @description navigate to "URL" in address bar input field. If not valid URL, navigate to error page.
   */
  protected goButtonHelper(): void {
    this.replaceHTTPS();
    this.routerNavigator(this.parseAddressURL());
  }

  /**
   * @description handles keypress events in input field
   * @param event keypress, looking for enter
   */
  protected inputKeyInputHelper(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.goButtonHelper();
  }

  /**
   * @description gets top level domain value (if exists) for provided domain value
   * @param domain domain associated with tld
   * @returns tld value as string
   */
  private getTLD(domain: string): string {
    const FOUND_TLD: SiteList | undefined = this.IEService.possibleSites.find((site) => site.domain === domain);

    if (FOUND_TLD !== undefined) return FOUND_TLD.tld;

    return '';
  }

  /**
   * @description if address bar contains 'https://', it will be replaced with 'http://'
   */
  private replaceHTTPS(): void {
    if (this.addressBarInput && this.addressBarInput.nativeElement.value.includes('https://')) {
      this.addressBarInput.nativeElement.value = this.addressBarInput.nativeElement.value.replace('https://', 'http://');
    }
  }

  /**
   * @description used to navigate to specific site.
   * @param domain
   * @param topLevelDomain
   * @param noAddress address bar should not display an address
   */
  private setAddressBar(domain: string, topLevelDomain: string = '', noAddress: boolean = false): void {
    if (this.addressBarInput) {
      if (!noAddress) {
        this.addressBarInput.nativeElement.value = `http://${domain}.${topLevelDomain}`;
      } else {
        this.addressBarInput.nativeElement.value = ``;
      }
    }
  }

  /**
   * @description parses value of the address bar input field, removing all content minus the domain
   * @returns string containing domain
   */
  private parseAddressURL(): string {
    let parsedValue = this.addressBarInput?.nativeElement.value;

    if (parsedValue?.includes('http://')) parsedValue = parsedValue.replace('http://', '');

    if (parsedValue?.includes('https://')) parsedValue = parsedValue.replace('https://', '');

    parsedValue = parsedValue?.split('.')[0];

    if (parsedValue) return parsedValue;

    return '';
  }

  /**
   * @description Sets window title
   * @param newTitle title for window-frame
   */
  private setWindowTitle(newTitle: string): void {
    if (this.windowFrame) {
      if (newTitle === '') {
        this.windowFrame.title = 'Internet Explorer';
      } else if (newTitle === 'Cannot find webpage') {
        this.windowFrame.title = newTitle;
      } else {
        newTitle = newTitle.replace('-', ' ');

        const WORDS = newTitle.split(' ');
        const CAPITALIZED = WORDS.map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ''));
        newTitle = CAPITALIZED.join(' ');

        this.windowFrame.title = `${newTitle} - Internet Explorer`;
      }
    }
  }

  /**
   * @description Checks possibleSites[] for instance of siteName as a domain
   * @param siteName site to check for as domain value in possibleSites[]
   * @returns true if possibleSites[] contains siteName param
   *
   */
  protected dnsContainsSite(siteName: string): boolean {
    return this.IEService.possibleSites.some((site) => site.domain === siteName) ? true : false;
  }

  /**
   * @description adds item to browserHistory[]
   * @param domain site domain
   * @param tld site top level domain
   */
  private addToHistory(domain: string, tld: string) {
    const LAST_INDEX: number = this.IEService.browserHistory.length - 1;

    if (this.IEService.browserHistory.length > 0) {
      if (
        this.IEService.browserHistory()[LAST_INDEX].domain !== domain &&
        this.IEService.browserHistory()[LAST_INDEX].tld !== tld
      ) {
        this.IEService.browserHistory().push({
          domain: domain,
          tld: tld,
        });
      }
    } else {
      this.IEService.browserHistory().push({
        domain: domain,
        tld: tld,
      });
    }
  }

  /**
   * @description called when search function input detects keypress, updaing search results array to display any matches
   */
  protected searchHelper() {
    this.searchResults = [];

    let inputVal = this.searchBarInput?.nativeElement.value;

    if (inputVal) {
      this.IEService.possibleSites.forEach((site) => {
        if (site.domain.includes(inputVal) || site.tld.includes(inputVal)) {
          this.searchResults.push(site);
        }
      });
    }
  }

  /**
   * @description gets operating system to determine appropriate print command string
   */
  protected getPrintCommand(): string {
    if (this.systemService.getOS() === 'Windows' || this.systemService.getOS() === 'Linux') {
      return 'Ctrl+P';
    } else if (this.systemService.getOS() === 'macOS') {
      return 'CMD+P';
    }

    return '';
  }

  /**
   * @description supports the full screen menu button
   */
  protected fullscreenHandler(): void {
    if (!this.windowFrame?.isFullSize) this.windowFrame?.viewButtonHandler();
  }

  /**
   * @description Formats site domain strings into words
   */
  protected formatButtonString(str: string): string {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /**
   * @description opens share menu on mobile devices (Android & iOS)
   */
  protected openShareMenu(): void {
    navigator.share({ url: `${this.systemService.webAddress}/programs?internet-explorer=${this.IEService.displayedSite()}` });
  }

  /**
   * @description sets (or unsets) dark mode based on local storage value
   */
  protected setDarkMode(): void {
    const LS_VALUE = this.settings.localStorageValues[1];

    if (localStorage.getItem(LS_VALUE) === 'disabled') {
      localStorage.setItem(LS_VALUE, 'enabled');
      this.IEService.darkMode.set(true);
    } else {
      localStorage.setItem(LS_VALUE, 'disabled');
      this.IEService.darkMode.set(false);
    }
  }
}
