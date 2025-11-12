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
      expect(compiled.querySelector('.top-panel'));
    });

    describe('left-side', () => {
      it('must exist', () => {
        expect(compiled.querySelector('.top-panel .left-side')).toBeTruthy();
      });

      // test stuff for img tag

      it('must not have img without icon set', () => {
        expect(compiled.querySelector('.top-panel .left-side img')).toBeFalsy();
      })
    });

    describe('Buttons', () => {
      describe('Assets', () => {
        // TODO add test for minimize button when icon added
        it('should have proper minimize button icon', () => {
          expect(compiled.querySelector('.minimize-button > img')?.getAttribute('src')).toBe('assets/icons/minimize-button.svg');
        });

        it('should have proper starting view button icon', () => {
          expect(compiled.querySelector('.view-button > img')?.getAttribute('src')).toBe('assets/icons/maximize-button.svg');
        });

        // TODO add test for changing view button icon
        // test presses button, tests for icon

        it('should have proper close button icon', () => {
          expect(compiled.querySelector('.close-button > img')?.getAttribute('src')).toBe('assets/icons/close-button.svg');
        });
      });

      // describe('Hiding', () => {
      // TODO modify
      // it('should not display minimize button if hideButtons is true', () => {
      //   const minimizeButton = compiled.querySelector('.minimize-button');
      //   minimizeButton?.classList.add('hide-button');

      //   expect(globalThis.getComputedStyle(minimizeButton as Element).display).toBe('none');
      // });

      // it('should not display view change button on .hide-button', () => {
      //   const viewButton = compiled.querySelector('.view-button');
      //   viewButton?.classList.add('hide-button');

      //   expect(globalThis.getComputedStyle(viewButton as Element).display).toBe('none');
      // });
      // });

      // TODO make something like this work
      // describe("Alerts", () => {
      //   it("should always be focused", () => {
      //     component.alert = true;

      //     expect(component.isElementFocused()).toBeTruthy();
      //   })
      // })

      // TODO add functionality tests
      // describe("Functionality", () => {
      //   it("should minimize on button press", () => {

      //   })

      //   it("should close on button press", () => {

      //   })
      // })
    });
  });

  it('must have space for window contents', () => {
    expect(compiled.querySelector('.window-body')).toBeTruthy();
  });
});
