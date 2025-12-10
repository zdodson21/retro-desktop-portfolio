import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaintProgram } from './paint.component';
import { provideRouter } from '@angular/router';

describe('PaintComponent', () => {
  let component: PaintProgram;
  let fixture: ComponentFixture<PaintProgram>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintProgram],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintProgram);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.paint-wrapper')).toBeTruthy();
  });

  describe('Structure', () => {
    describe('Window Frame', () => {
      it('must have proper window title', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('Paint');
      });

      it('must have proper focus name', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('paint');
      });

      it('must have proper icon path', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-icon')).toBe('assets/icons/paint.webp');
      });
    });

    it('must have frame contents wrapper', () => {
      expect(compiled.querySelector('window-frame .frame-contents')).toBeTruthy();
    });

    it('must have space for toolbar', () => {
      expect(compiled.querySelector('.toolbar')).toBeTruthy();
    });
  })
});
