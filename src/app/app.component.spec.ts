import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [[provideRouter([])]],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('app-wrapper', () => {
    it('should exist', () => {
      expect(compiled.querySelector('.app-wrapper')).toBeTruthy();
    });

    it('should contain .visible by default', () => {
      expect(compiled.querySelector('.app-wrapper')?.classList.contains('visible')).toBeTruthy();
    });
    // TODO probably better to ensure it has both the class AND is display: none

    // TODO should not be visible when desktopMode not === 0?
  });

  describe('<alert-shutdown>', () => {
    it('should contain <alert-shutdown> component', () => {
      expect(compiled.querySelector('alert-shutdown')).toBeTruthy();
    });

    it('does not contain class .visible by default', () => {
      expect(compiled.querySelector('alert-shutdown')?.classList.contains('visible')).toBeFalsy();
      // TODO probably better to ensure it has both the class AND is display: none
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

    it('should not be visible by default', () => {
      expect(compiled.querySelector('start-menu')?.classList.contains('visible')).toBeFalsy();
    });

    // TODO probably better to ensure it has both the class AND is display: none

    // TODO should be visible when start-button is pressed???
  });

  describe('<taskbar-base>', () => {
    it('Should Contain Taskbar-Base Component', () => {
      expect(compiled.querySelector('taskbar-base')).toBeTruthy();
    });
  });

  describe('<shutdown-screen>', () => {
    it('Should contain Shutdown-Screen component', () => {
      expect(compiled.querySelector('shutdown-screen')).toBeTruthy();
    });

    it('Should not be visible by default', () => {
      expect(compiled.querySelector('shutdown-screen')?.classList.contains('visible')).toBeFalsy();
      // TODO probably better to ensure it has both the class AND is display: none
    });
  });

  describe('<msdos-prompt>', () => {
    it('should contain msdos-prompt component', () => {
      expect(compiled.querySelector('msdos-prompt')).toBeTruthy();
    });

    it('Should not be visible by default', () => {
      expect(compiled.querySelector('msdos-prompt')?.classList.contains('visible')).toBeFalsy();
      // TODO probably better to ensure it has both the class AND is display: none
    });
  });

  describe('Print selection', () => {
    it('must have print section', () => {
      expect(compiled.querySelector('.print-selection')).toBeTruthy();
    });

    // TODO test to ensure every site can be created in the print selection???
  })
});
