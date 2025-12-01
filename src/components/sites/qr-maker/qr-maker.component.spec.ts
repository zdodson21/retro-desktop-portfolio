import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrMakerSite } from './qr-maker.component';

describe('QrMakerComponent', () => {
  let component: QrMakerSite;
  let fixture: ComponentFixture<QrMakerSite>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrMakerSite],
    }).compileComponents();

    fixture = TestBed.createComponent(QrMakerSite);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a wrapper', () => {
    expect(compiled.querySelector('.qr-maker-site-wrapper')).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });

  describe('badges', () => {
    it('should contain Flutter badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasFlutter = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('flutter.svg')) {
          hasFlutter = true;
          return;
        }
      });

      expect(hasFlutter).toBeTruthy();
    });

    it('should contain Dart badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasDart = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('dart.svg')) {
          hasDart = true;
          return;
        }
      });

      expect(hasDart).toBeTruthy();
    });

    it('should contain Android badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasAndroid = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('android.svg')) {
          hasAndroid = true;
          return;
        }
      });

      expect(hasAndroid).toBeTruthy();
    });

    it('should contain Linux badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasLinux = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('linux.svg')) {
          hasLinux = true;
          return;
        }
      });

      expect(hasLinux).toBeTruthy();
    });

    it('should contain Windows badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasWindows = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('windows.svg')) {
          hasWindows = true;
          return;
        }
      });

      expect(hasWindows).toBeTruthy();
    });

    it('should contain Android Studio badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasAndroidStudio = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('android-studio.svg')) {
          hasAndroidStudio = true;
          return;
        }
      });

      expect(hasAndroidStudio).toBeTruthy();
    });

    it('should contain Visual Studio badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasVisualStudio = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('visual-studio.svg')) {
          hasVisualStudio = true;
          return;
        }
      });

      expect(hasVisualStudio).toBeTruthy();
    });
  });
});
