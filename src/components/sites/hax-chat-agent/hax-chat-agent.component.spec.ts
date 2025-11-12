import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HaxChatAgentSite } from './hax-chat-agent.component';

describe('HaxChatAgentSite', () => {
  let component: HaxChatAgentSite;
  let fixture: ComponentFixture<HaxChatAgentSite>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaxChatAgentSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HaxChatAgentSite);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.hax-chat-agent-site-wrapper')).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });

  describe('badges', () => {
    it('should contain Lit badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasLit = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('lit.svg')) {
          hasLit = true;
        }
      });

      expect(hasLit).toBeTruthy();
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

    it('should contain CSS3 badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasCSS3 = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('css3.svg')) {
          hasCSS3 = true;
        }
      });

      expect(hasCSS3).toBeTruthy();
    });

    it('should contain JavaScript badge', () => {
      const badges = compiled.querySelectorAll('.badges img');
      let hasJavaScript = false;

      badges.forEach((element) => {
        if (element.getAttribute('src')?.includes('javascript.svg')) {
          hasJavaScript = true;
        }
      });

      expect(hasJavaScript).toBeTruthy();
    });
  });
});
