import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemMonitorComponent } from './system-monitor.component';

describe('SystemMonitorComponent', () => {
  let component: SystemMonitorComponent;
  let fixture: ComponentFixture<SystemMonitorComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemMonitorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SystemMonitorComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('Window Management', () => {
    it('focus-name should be "system-monitor"', () => {
      expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('system-monitor');
    });

    it('window-title should be "System Monitor"', () => {
      expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('System Monitor');
    });

    it('icon path should be correct', () => {
      expect(compiled.querySelector('window-frame')?.getAttribute('window-icon')?.split('.')[0]).toBe('assets/icons/system-monitor')
    });
  });
});
