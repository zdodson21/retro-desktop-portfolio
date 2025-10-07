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
});
