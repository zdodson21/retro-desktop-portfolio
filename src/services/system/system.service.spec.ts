import { TestBed } from '@angular/core/testing';

import { SystemService } from './system.service';

describe('SystemService', () => {
  let service: SystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return browser as Google Chrome', () => {
    expect(service.getBrowser()).toEqual('Google Chrome');
  });

  it('should acquire userAgent properly', () => {
    expect(service.userAgent).toEqual(navigator.userAgent);
  });

  describe('Viewport', () => {
    it('should acquire width properly', () => {
      expect(service.viewportWidth()).toEqual(globalThis.innerWidth);
    });

    it('should acquire height properly', () => {
      expect(service.viewportHeight()).toEqual(globalThis.innerHeight);
    });
  });
});
