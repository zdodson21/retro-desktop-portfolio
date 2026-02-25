import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { WindowFrameComponent } from './window-frame.component';

describe('WindowFrameComponent', () => {
  let component: WindowFrameComponent;
  let fixture: ComponentFixture<WindowFrameComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowFrameComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WindowFrameComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.window-frame-wrapper')).toBeTruthy();
  });

  describe('top control panel', () => {
    it('must exist', () => {
      expect(compiled.querySelector('.top-panel')).toBeTruthy();
    });

    describe('left-side', () => {
      it('must exist', () => {
        expect(compiled.querySelector('.top-panel .left-side')).toBeTruthy();
      });

      it('must not have img without icon set', () => {
        expect(compiled.querySelector('.top-panel .left-side img')).toBeFalsy();
      });

      // TODO test for img tag when icon var is set

      it('must have space for text', () => {
        expect(compiled.querySelector('.top-panel .left-side p')).toBeTruthy();
      });

      // TODO test for innerHTML of p tag when title var is set
    });

    describe('Buttons', () => {
      it('must be wrapped', () => {
        expect(compiled.querySelector('.controls')).toBeTruthy();
      });

      describe('minimize', () => {
        it('should exist by default', () => {
          expect(compiled.querySelector('.minimize-button')).toBeTruthy();
        });

        // TODO test not existing when hideButtons set to true

        it('should have proper minimize button icon', () => {
          expect(compiled.querySelector('.minimize-button > img')?.getAttribute('src')).toBe('assets/icons/minimize-button.svg');
        });
      });

      describe('view', () => {
        it('should exist by default', () => {
          expect(compiled.querySelector('.view-button')).toBeTruthy();
        });

        // TODO test not existing when hideButtons set to true

        it('should have proper starting view button icon', () => {
          expect(compiled.querySelector('.view-button > img')?.getAttribute('src')).toBe('assets/icons/maximize-button.svg');
        });
      });

      describe('close', () => {
        it('should exist by default', () => {
          expect(compiled.querySelector('.close-button')).toBeTruthy();
        });

        // TODO test not existing when hideButtons set to true

        it('should have proper close button icon', () => {
          expect(compiled.querySelector('.close-button > img')?.getAttribute('src')).toBe('assets/icons/close-button.svg');
        });
      });
    });
  });

  it('must have space for window contents', () => {
    expect(compiled.querySelector('.window-body')).toBeTruthy();
  });

  describe('Accessibility', () => {
    describe('Window control buttons', () => {
      it('should all have aria labels', () => {
        const BUTTONS: NodeListOf<HTMLButtonElement> = compiled.querySelectorAll('button');
        let allHaveAriaLabels: boolean = true;

        BUTTONS.forEach((item) => {
          if (item.ariaLabel === null || item.ariaLabel === '') allHaveAriaLabels = false;
        });

        expect(allHaveAriaLabels).toBeTruthy();
      });
    });
  });
});
