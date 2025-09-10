import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertShutdownComponent } from './alert-shutdown.component';

describe('AlertShutdownComponent', () => {
  let component: AlertShutdownComponent;
  let fixture: ComponentFixture<AlertShutdownComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertShutdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertShutdownComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('<window-frame>', () => {
    it('window-title should be "Shut Down Windows"', () => {
      expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('Shut Down Windows');
    });

    it('focus-name should be "shutdown-alert"', () => {
      expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('shutdown-alert');
    });
  });

  describe('Frame Contents', () => {
    it('should have correct file path and name for img', () => {
      expect(compiled.querySelector('.left-side > img')?.getAttribute('src')).toBe('assets/icons/shutdown-alert.svg');
    });
  });

  describe('Logic', () => {
    it('starts with formValue = 0', () => {
      expect(component.formValue).toBe(0);
    });
  });
});
