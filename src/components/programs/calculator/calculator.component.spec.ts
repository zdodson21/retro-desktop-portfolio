import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must be wrapped', () => {
    expect(compiled.querySelector('.calculator-wrapper')).toBeTruthy();
  });

  describe('Structure', () => {
    describe('Window Frame', () => {
      it('window-title should be "Calculator"', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('Calculator');
      });

      it('focus-name should be "calculator"', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('calculator');
      });

      it('must have proper icon path', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-icon')).toBe('assets/icons/calculator.webp');
      });
    });

    it('must have a frame-contents wrapper', () => {
      expect(compiled.querySelector('window-frame .frame-contents')).toBeTruthy();
    });

    it('must have a toolbar', () => {
      expect(compiled.querySelector('.toolbar')).toBeTruthy();
    });

    it('must have calculator section', () => {
      expect(compiled.querySelector('.calculator')).toBeTruthy();
    });

    it('must display standard button set by default', () => {
      expect(compiled.querySelector('.standard-button-set')).toBeTruthy();
    });

    it('must not display scientific button set by default', () => {
      expect(compiled.querySelector('.scientific-button-set')).toBeFalsy();
    });
  });

  // describe('button labels', () => {
  //   const STD_LABELS = [];

  //   it('must contain standard button labels', () => {
  // TODO test forEach calculator button expect one of them to have the appropriate label
  //   })

  //    const SCI_LABELS = [];
  //    it('must contain scientific & standard button labels', () => {
  //
  //    })
  // })

  // TODO if possible, I would actually like to call WASM functions here for testing. Can use same tests as in C testing program.
});
