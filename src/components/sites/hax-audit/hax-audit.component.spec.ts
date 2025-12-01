import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HaxAuditSite } from './hax-audit.component';

describe('HaxAuditSite', () => {
  let component: HaxAuditSite;
  let fixture: ComponentFixture<HaxAuditSite>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaxAuditSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HaxAuditSite);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.hax-audit-site-wrapper')).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });

  describe('badges', () => {
    it('should contain JavaScript badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasJavaScript = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('javascript.svg')) {
          hasJavaScript = true;
          return;
        }
      });

      expect(hasJavaScript).toBeTruthy();
    });

    it('should contain Node.js badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasNode = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('node.svg')) {
          hasNode = true;
          return;
        }
      });

      expect(hasNode).toBeTruthy();
    });

    it('should contain NPM badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasNPM = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('npm.svg')) {
          hasNPM = true;
          return;
        }
      });

      expect(hasNPM).toBeTruthy();
    });

    it('should contain VS Code badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasVSCode = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('vscode.svg')) {
          hasVSCode = true;
          return;
        }
      });

      expect(hasVSCode).toBeTruthy();
    });
  });
});
