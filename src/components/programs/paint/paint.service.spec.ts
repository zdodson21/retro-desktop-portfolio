import { TestBed } from '@angular/core/testing';

import { PaintService } from './paint.service';

describe('PaintService', () => {
  let service: PaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
