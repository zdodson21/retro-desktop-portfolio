import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyWeatherSite } from './py-weather.component';

describe('PyWeatherComponent', () => {
  let component: PyWeatherSite;
  let fixture: ComponentFixture<PyWeatherSite>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyWeatherSite],
    }).compileComponents();

    fixture = TestBed.createComponent(PyWeatherSite);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('badges', () => {
    it('should contain Python badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasPython = false;

      badges.forEach((element) => {
      if (element.getAttribute('src')?.includes('python.svg')) {
        hasPython = true;
      }
      });

      expect(hasPython).toBeTruthy();
    });

    it('should contain Jinja badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasJinja = false;

      badges.forEach((element) => {
      if (element.getAttribute('src')?.includes('jinja.svg')) {
        hasJinja = true;
      }
      });

      expect(hasJinja).toBeTruthy();
    });

    it('should contain Bash badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasBash = false;

      badges.forEach((element) => {
      if (element.getAttribute('src')?.includes('bash.svg')) {
        hasBash = true;
      }
      });

      expect(hasBash).toBeTruthy();
    });

    it('should contain Raspberry Pi badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasRaspberryPi = false;

      badges.forEach((element) => {
      if (element.getAttribute('src')?.includes('raspberry-pi.svg')) {
        hasRaspberryPi = true;
      }
      });

      expect(hasRaspberryPi).toBeTruthy();
    });

    it('should contain Linux badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasLinux = false;

      badges.forEach((element) => {
      if (element.getAttribute('src')?.includes('linux.svg')) {
        hasLinux = true;
      }
      });

      expect(hasLinux).toBeTruthy();
    });

    it('should contain HTML5 badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasHTML5 = false;

      badges.forEach((element) => {
      if (element.getAttribute('src')?.includes('html5.svg')) {
        hasHTML5 = true;
      }
      });

      expect(hasHTML5).toBeTruthy();
    });

    it('should contain SASS badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasSASS = false;

      badges.forEach((element) => {
      if (element.getAttribute('src')?.includes('sass.svg')) {
        hasSASS = true;
      }
      });

      expect(hasSASS).toBeTruthy();
    });

    it('should contain playwright badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasFirefox = false;

      badges.forEach((element) => {
      if (element.getAttribute('src')?.includes('playwright.svg')) {
        hasFirefox = true;
      }
      });

      expect(hasFirefox).toBeTruthy();
    });

    it('should contain Penpot badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasPenpot = false;

      badges.forEach((element) => {
      if (element.getAttribute('src')?.includes('penpot.svg')) {
        hasPenpot = true;
      }
      });

      expect(hasPenpot).toBeTruthy();
    });
  });
});
