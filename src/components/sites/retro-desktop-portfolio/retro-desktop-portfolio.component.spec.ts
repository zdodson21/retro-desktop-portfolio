import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RetroDesktopPortfolioSite } from './retro-desktop-portfolio.component';

describe('RetroDesktopPortfolioSite', () => {
  let component: RetroDesktopPortfolioSite;
  let fixture: ComponentFixture<RetroDesktopPortfolioSite>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroDesktopPortfolioSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RetroDesktopPortfolioSite);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.portfolio-site-wrapper')).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });

  describe('badges', () => {
    it('should contain Angular badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasHTML5 = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('angular.svg')) {
          hasHTML5 = true;
        }
      });

      expect(hasHTML5).toBeTruthy();
    });

    it('should contain Typescript badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasTypescript = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('typescript.svg')) {
          hasTypescript = true;
        }
      });

      expect(hasTypescript).toBeTruthy();
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

    it('should contain SCSS badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasHTML5 = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('scss.svg')) {
          hasHTML5 = true;
        }
      });

      expect(hasHTML5).toBeTruthy();
    });

    it('should contain css3 badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasCSS3 = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('css3.svg')) {
          hasCSS3 = true;
        }
      });

      expect(hasCSS3).toBeTruthy();
    });

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
      let hasWASM = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('wasm.svg')) {
          hasWASM = true;
        }
      });

      expect(hasWASM).toBeTruthy();
    });

    it('should contain Git badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasGit = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('git.svg')) {
          hasGit = true;
        }
      });

      expect(hasGit).toBeTruthy();
    });

    it('should contain GitHub badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasGitHub = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('github.svg')) {
          hasGitHub = true;
        }
      });

      expect(hasGitHub).toBeTruthy();
    });

    it('should contain Vercel badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasVercel = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('vercel.svg')) {
          hasVercel = true;
        }
      });

      expect(hasVercel).toBeTruthy();
    });

    it('should contain Cloudflare badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasCloudflare = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('cloudflare.svg')) {
          hasCloudflare = true;
        }
      });

      expect(hasCloudflare).toBeTruthy();
    });

    it('should contain GitHub Actions badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasGitHubActions = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('github-actions.svg')) {
          hasGitHubActions = true;
        }
      });

      expect(hasGitHubActions).toBeTruthy();
    });

    it('should contain Jasmine badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasJasmine = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('jasmine.svg')) {
          hasJasmine = true;
        }
      });

      expect(hasJasmine).toBeTruthy();
    });

    it('should contain Prettier badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasPrettier = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('prettier.svg')) {
          hasPrettier = true;
        }
      });

      expect(hasPrettier).toBeTruthy();
    });

    it('should contain Docker badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasDocker = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('docker.svg')) {
          hasDocker = true;
        }
      });

      expect(hasDocker).toBeTruthy();
    });

    it('should contain Electron badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasElectron = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('electron.svg')) {
          hasElectron = true;
        }
      });

      expect(hasElectron).toBeTruthy();
    });

    it('should contain Aseprite badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasAseprite = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('aseprite.svg')) {
          hasAseprite = true;
        }
      });

      expect(hasAseprite).toBeTruthy();
    });

    it('should contain GIMP badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasGIMP = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('gimp.svg')) {
          hasGIMP = true;
        }
      });

      expect(hasGIMP).toBeTruthy();
    });
  });
});
