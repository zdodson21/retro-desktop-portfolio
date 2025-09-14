import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let service: AppService;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [AppService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    service = TestBed.inject(AppService);
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('Service', () => {
    it('should contain blank focus by default', () => {
      expect(service.focus()).toBe('');
    });

    it('should not contain any minimized programs', () => {
      expect(service.minimizedPrograms()).toEqual([]);
    });
  });

  describe('<alert-shutdown>', () => {
    it('should contain <alert-shutdown> component', () => {
      expect(compiled.querySelector('alert-shutdown')).toBeTruthy();
    });

    it('isAlertVisible should be false by default', () => {
      expect(app.isAlertVisible()).toBeFalsy();
    });

    it('does not contain class .visible by default', () => {
      expect(compiled.querySelector('alert-shutdown')?.classList.contains('visible')).toBeFalsy();
    });
  });

  describe('<desktop-environment>', () => {
    it('Should contain Desktop-Environment Component', () => {
      expect(compiled.querySelector('desktop-environment')).toBeTruthy();
    });
  });

  describe('<start-menu>', () => {
    it('Should Contain Start-Menu Component', () => {
      expect(compiled.querySelector('start-menu')).toBeTruthy();
    });
  });

  describe('taskbar-base', () => {
    it('Should Contain Taskbar-Base Component', () => {
      expect(compiled.querySelector('taskbar-base')).toBeTruthy();
    });
  });
});
