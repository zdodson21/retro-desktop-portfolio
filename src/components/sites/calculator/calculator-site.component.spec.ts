import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSiteComponent } from './calculator-site.component';

describe('CalculatorComponent', () => {
  let component: CalculatorSiteComponent;
  let fixture: ComponentFixture<CalculatorSiteComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorSiteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorSiteComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.calculator-site-wrapper')).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });

  describe('badges', () => {
    it('should contain C badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasC = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('c.svg')) {
          hasC = true;
        }
      });

      expect(hasC).toBeTruthy();
    });

    it('should contain WASM badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasWasm = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('wasm.svg')) {
          hasWasm = true;
        }
      });

      expect(hasWasm).toBeTruthy();
    });

    it('should contain Libreoffice Math badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasMath = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('libreoffice-math.svg')) {
          hasMath = true;
        }
      });

      expect(hasMath).toBeTruthy();
    });

    it('should contain Angular badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasAngular = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('angular.svg')) {
          hasAngular = true;
        }
      });

      expect(hasAngular).toBeTruthy();
    });

    it('should contain TypeScript badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasTypeScript = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('typescript.svg')) {
          hasTypeScript = true;
        }
      });

      expect(hasTypeScript).toBeTruthy();
    });

    it('should contain HTML5 badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasHtml5 = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('html5.svg')) {
          hasHtml5 = true;
        }
      });

      expect(hasHtml5).toBeTruthy();
    });

    it('should contain SCSS badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasScss = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('scss.svg')) {
          hasScss = true;
        }
      });

      expect(hasScss).toBeTruthy();
    });
  });
});
