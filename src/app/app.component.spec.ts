import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  let app: AppComponent;
  let service: AppService;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [AppService, [provideRouter([])]],
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

    it('desktopMode should be 0 by default', () => {
      expect(service.desktopMode()).toBe(0); // TODO difference between toBe and toEqual
    });

    it('should not contain any minimized programs', () => {
      expect(service.minimizedPrograms()).toEqual([]);
    });

    describe('User Agent', () => {
      it('should return Google Chrome', () => {
        expect(service.getBrowser()).toEqual('Google Chrome');
      });
    });
  });

  describe('<alert-shutdown>', () => {
    it('should contain <alert-shutdown> component', () => {
      expect(compiled.querySelector('alert-shutdown')).toBeTruthy();
    });

    it('does not contain class .visible by default', () => {
      expect(compiled.querySelector('alert-shutdown')?.classList.contains('visible')).toBeFalsy();
    });

    // TODO general idea is here, need to make it work
    // it('contains .visible when desktopMode = 1', () => {
    //   service.desktopMode.set(1);
    //   expect(compiled.querySelector('alert-shutdown')?.classList.contains('visible')).toBeTruthy();
    // });
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

  describe('<taskbar-base>', () => {
    it('Should Contain Taskbar-Base Component', () => {
      expect(compiled.querySelector('taskbar-base')).toBeTruthy();
    });
  });

  describe('<shutdown-screen>', () => {
    it('Should not be visible by default', () => {
      expect(compiled.querySelector('shutdown-screen')?.classList.contains('visible')).toBeFalsy();
      // TODO probably better to ensure it has both the class AND is display: none
    });
  });

  describe('<msdos-prompt>', () => {
    it('Should not be visible by default', () => {
      expect(compiled.querySelector('msdos-prompt')?.classList.contains('visible')).toBeFalsy();
    })
  });
});
