import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DesktopEnvironmentComponent } from './desktop-environment.component';

describe('DesktopEnvironmentComponent', () => {
  let component: DesktopEnvironmentComponent;
  let fixture: ComponentFixture<DesktopEnvironmentComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopEnvironmentComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopEnvironmentComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('must be wrapped', () => {
    expect(compiled.querySelector('.desktop-environment-wrapper')).toBeTruthy();
  });

  describe('vital container existence', () => {
    it('must contain programs container', () => {
      expect(compiled.querySelector('.programs')).toBeTruthy();
    });

    it('must contain icons wrapper', () => {
      expect(compiled.querySelector('.icons')).toBeTruthy();
    });
  });

  describe('Desktop Icon Focuses', () => {
    it('every desktop-icon should contain an icon-focus-name', () => {
      const DESKTOP_ICONS: NodeListOf<Element> = compiled.querySelectorAll('desktop-icon');

      DESKTOP_ICONS.forEach((desktopIcon) => {
        expect(desktopIcon.getAttribute('icon-focus-name')).toBeTruthy();
      });
    });

    it('every desktop-icon should contain a focus-name', () => {
      const DESKTOP_ICONS: NodeListOf<Element> = compiled.querySelectorAll('desktop-icon');

      DESKTOP_ICONS.forEach((desktopIcon) => {
        expect(desktopIcon.getAttribute('focus-name')).toBeTruthy();
      });
    });
  });
});
