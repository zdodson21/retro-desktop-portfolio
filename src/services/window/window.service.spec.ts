import { TestBed } from '@angular/core/testing';

import { WindowService } from './window.service';

describe('WindowService', () => {
  let service: WindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not contain any open programs', () => {
    expect(service.openPrograms()).toEqual([]);
  });

  it('should not contain any minimized programs', () => {
    expect(service.minimizedPrograms()).toEqual([]);
  });
});
