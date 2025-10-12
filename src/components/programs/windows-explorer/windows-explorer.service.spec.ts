import { TestBed } from '@angular/core/testing';

import { WindowsExplorerService } from './windows-explorer.service';

describe('WindowsExplorerService', () => {
  let service: WindowsExplorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowsExplorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have a focused icon', () => {
    expect(service.focusedIcon()).toBe('');
  });
});
