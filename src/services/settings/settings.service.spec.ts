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

  it('should contain at least one local storage value', () => {
    expect(service.localStorageValues.length).toBeGreaterThan(0);
  });
});
