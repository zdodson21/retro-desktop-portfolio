import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';

describe('SystemService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain blank focus by default', () => {
    expect(service.focus()).toBe('');
  });

  it('desktopMode should be 0 by default', () => {
    expect(service.desktopMode()).toBe(0);
  });
});
