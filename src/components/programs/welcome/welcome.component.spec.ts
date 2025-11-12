import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.welcome-wrapper')).toBeTruthy();
  });

  describe('Structure', () => {
    describe('Window Frame', () => {
      it('should have proper window title', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('Welcome');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('welcome');
      });

      // TODO test for proper percent width, height, and hide buttons true
    });

    it('should have a frame contents wrapper', () => {
      expect(compiled.querySelector('window-frame .frame-contents')).toBeTruthy();
    });
  });
});
