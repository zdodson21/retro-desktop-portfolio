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
});
