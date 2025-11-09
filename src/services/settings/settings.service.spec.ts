import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have sound disabled by default', () => {
    expect(service.isSoundEnabled()).toBeFalse();
  });

  it('should not have a custom background color by default', () => {
    expect(service.customBackgroundColor()).toEqual('');
  });

  describe('Local Storage', () => {
    it('should contain at least one local storage value', () => {
      expect(service.localStorageValues.length).toBeGreaterThan(0);
    });

    // Checking to make sure each exists and is the right index, would break everywhere else it is used
    // since they are called by index value rather than directly by name.

    it('index 0 should be openWelcomeOnStartup', () => {
      expect(service.localStorageValues[0]).toBe('openWelcomeOnStartup');
    });

    it('index 1 should be internetExplorerDarkMode', () => {
      expect(service.localStorageValues[1]).toBe('internetExplorerDarkMode');
    });

    it('index 2 should be ieVisitedSites', () => {
      expect(service.localStorageValues[2]).toBe('ieVisitedSites');
    });
  });
});
