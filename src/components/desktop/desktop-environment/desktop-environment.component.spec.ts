import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopEnvironmentComponent } from './desktop-environment.component';

describe('DesktopEnvironmentComponent', () => {
  let component: DesktopEnvironmentComponent;
  let fixture: ComponentFixture<DesktopEnvironmentComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopEnvironmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopEnvironmentComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
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
