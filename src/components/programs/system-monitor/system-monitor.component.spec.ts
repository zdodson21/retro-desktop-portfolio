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

  it('should have <window-frame focus-name="system-monitor>', () => {
    expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('system-monitor');
  })
});
