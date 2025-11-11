import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertShutdownComponent } from './alert-shutdown.component';
import { provideRouter } from '@angular/router';

describe('AlertShutdownComponent', () => {
  let component: AlertShutdownComponent;
  let fixture: ComponentFixture<AlertShutdownComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertShutdownComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertShutdownComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('must be wrapped', () => {
    expect(compiled.querySelector('.alert-shutdown-wrapper')).toBeTruthy();
  })

  describe('<window-frame>', () => {
    it('window-title should be "Shut Down Windows"', () => {
      expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('Shut Down Windows');
    });

    it('focus-name should be "shutdown-alert"', () => {
      expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('shutdown-alert');
    });

    // TODO should be set to [alert]=true
  });

  describe('Frame Contents', () => {
    it('should have correct file path and name for img', () => {
      expect(compiled.querySelector('.left-side > img')?.getAttribute('src')).toBe('assets/icons/shutdown-alert.svg');
    });
  });

  describe('Form', () => {
    describe('Shutdown', () => {
      it('should exist', () => {
        expect(compiled.querySelector('#shutdown')).toBeTruthy();
      })

      // TODO Should have value 0

      // TODO should be selected by default
    })

    describe('Restart', () => {
      it('should exist', () => {
        expect(compiled.querySelector('#restart')).toBeTruthy();
      })

      // TODO should have value 1
    })

    // describe('MSDOS Mode', () => {
    //   it('should exist', () => {
    //     expect(compiled.querySelector('#msdos-mode')).toBeTruthy();
    //   })
    //   TODO should have value 2
    // })
  })
});
