import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { WindowsExplorerComponent } from './windows-explorer.component';

describe('WindowsExplorerComponent', () => {
  let component: WindowsExplorerComponent;
  let fixture: ComponentFixture<WindowsExplorerComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsExplorerComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WindowsExplorerComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.windows-explorer-wrapper')).toBeTruthy();
  });

  describe('Structure', () => {
    describe('Window Frame', () => {
      it('should have proper window title', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('Windows Explorer');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('windows-explorer');
      });

      it('should have proper window-icon', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-icon')).toBe('assets/icons/windows-explorer.svg');
      });
    });

    it('should have frame contents wrapper', () => {
      expect(compiled.querySelector('window-frame .frame-contents')).toBeTruthy();
    });

    it('should have main content space', () => {
      expect(compiled.querySelector('.contents')).toBeTruthy();
    })
  });
});
