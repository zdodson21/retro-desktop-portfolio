import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjallarhornSite } from './gjallarhorn.component';

describe('GjallarhornComponent', () => {
  let component: GjallarhornSite;
  let fixture: ComponentFixture<GjallarhornSite>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GjallarhornSite],
    }).compileComponents();

    fixture = TestBed.createComponent(GjallarhornSite);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a wrapper', () => {
    expect(compiled.querySelector('.gjallarhorn-site-wrapper')).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });

  describe('badges', () => {
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

    it('should contain kotlin badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasKotlin = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('kotlin.svg')) {
          hasKotlin = true;
          return;
        }
      });

      expect(hasKotlin).toBeTruthy();
    });

    it('should contain jetpack compose badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasJetpackCompose = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('jetpack-compose.svg')) {
          hasJetpackCompose = true;
          return;
        }
      });

      expect(hasJetpackCompose).toBeTruthy();
    });

    it('should contain android badge', () => {
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

    it('should contain sqlite badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasSQLite = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('sqlite.svg')) {
          hasSQLite = true;
          return;
        }
      });

      expect(hasSQLite).toBeTruthy();
    });

    it('should contain github badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasGithub = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('github.svg')) {
          hasGithub = true;
          return;
        }
      });

      expect(hasGithub).toBeTruthy();
    });
  });

  // TODO when adding the badge tests, create a class and a common function to use for this.
});
