import { TestBed } from '@angular/core/testing';
import { InternetExplorerService } from './internet-explorer.service';

describe('InternetExplorerService', () => {
  let service: InternetExplorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternetExplorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the proper status bar icon', () => {
    expect(service.statusBarIcon()).toBe('assets/icons/html-file.svg');
  });

  it('should have status bar content set to "ready" by default', () => {
    expect(service.statusBarContent()).toBe('Ready');
  });

  it('should be set to light mode by default', () => {
    expect(service.darkMode()).toBeFalse();
  });

  it('should have empty browser history by default', () => {
    expect(service.browserHistory.length).toEqual(0);
  });

  it('should not have the sidebar open by default', () => {
    expect(service.sidebar()).toBeFalse();
  });

  it('should have at least one possible site', () => {
    expect(service.possibleSites.length).toBeGreaterThan(0);
  });

  it('should open to "about-me" page first', () => {
    expect(service.displayedSite()).toBe('about-me');
  });
});
