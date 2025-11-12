import { computeMsgId } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProgramMenuComponent } from './program-menu.component';

describe('ProgramMenuComponent', () => {
  let component: ProgramMenuComponent;
  let fixture: ComponentFixture<ProgramMenuComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramMenuComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.program-menu-wrapper')).toBeTruthy();
  });

  describe('Structure', () => {
    describe('Window Frame', () => {
      it('should have proper window-title', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('Mobile Program Menu');
      });

      it('should have proper focus-name', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('program-menu');
      });

      it('should have proper window-icon', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-icon')).toBe('assets/icons/program-folder.svg');
      });
    });

    it('should have frame contents wrapper', () => {
      expect(compiled.querySelector('window-frame .frame-contents')).toBeTruthy();
    });
  });

  describe('start items', () => {
    // TODO Expect each to have "in-program="true""

    describe('Calculator', () => {
      it('should exist', () => {
        expect(compiled.querySelector('.calculator-start-item')).toBeTruthy();
      });

      it('should have proper icon', () => {
        expect(compiled.querySelector('.calculator-start-item')?.getAttribute('icon')).toBe('assets/icons/calculator.svg');
      });

      it('should have proper program name', () => {
        expect(compiled.querySelector('.calculator-start-item')?.getAttribute('program-name')).toBe('Calculator');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('.calculator-start-item')?.getAttribute('focus-name')).toBe('calculator');
      });
    });

    describe('Control Panel', () => {
      it('should exist', () => {
        expect(compiled.querySelector('.control-panel-start-item')).toBeTruthy();
      });

      it('should have proper icon', () => {
        expect(compiled.querySelector('.control-panel-start-item')?.getAttribute('icon')).toBe('assets/icons/control-panel.svg');
      });

      it('should have proper program name', () => {
        expect(compiled.querySelector('.control-panel-start-item')?.getAttribute('program-name')).toBe('Control Panel');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('.control-panel-start-item')?.getAttribute('focus-name')).toBe('control-panel');
      });
    });

    describe('Help', () => {
      it('should exist', () => {
        expect(compiled.querySelector('.help-start-item')).toBeTruthy();
      });

      it('should have proper icon', () => {
        expect(compiled.querySelector('.help-start-item')?.getAttribute('icon')).toBe('assets/icons/help.svg');
      });

      it('should have proper program name', () => {
        expect(compiled.querySelector('.help-start-item')?.getAttribute('program-name')).toBe('Help');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('.help-start-item')?.getAttribute('focus-name')).toBe('help');
      });
    });

    describe('Internet Explorer', () => {
      it('should exist', () => {
        expect(compiled.querySelector('.internet-explorer-start-item')).toBeTruthy();
      });

      it('should have proper icon', () => {
        expect(compiled.querySelector('.internet-explorer-start-item')?.getAttribute('icon')).toBe(
          'assets/icons/internet-explorer.svg',
        );
      });

      it('should have proper program name', () => {
        expect(compiled.querySelector('.internet-explorer-start-item')?.getAttribute('program-name')).toBe('Internet Explorer');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('.internet-explorer-start-item')?.getAttribute('focus-name')).toBe('internet-explorer');
      });
    });

    describe('My Computer', () => {
      it('should exist', () => {
        expect(compiled.querySelector('.my-computer-start-item')).toBeTruthy();
      });

      it('should have proper icon', () => {
        expect(compiled.querySelector('.my-computer-start-item')?.getAttribute('icon')).toBe('assets/icons/my-computer.svg');
      });

      it('should have proper program name', () => {
        expect(compiled.querySelector('.my-computer-start-item')?.getAttribute('program-name')).toBe('My Computer');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('.my-computer-start-item')?.getAttribute('focus-name')).toBe('my-computer');
      });
    });

    describe('System Monitor', () => {
      it('should exist', () => {
        expect(compiled.querySelector('.system-monitor-start-item')).toBeTruthy();
      });

      it('should have proper icon', () => {
        expect(compiled.querySelector('.system-monitor-start-item')?.getAttribute('icon')).toBe(
          'assets/icons/system-monitor.svg',
        );
      });

      it('should have proper program name', () => {
        expect(compiled.querySelector('.system-monitor-start-item')?.getAttribute('program-name')).toBe('System Monitor');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('.system-monitor-start-item')?.getAttribute('focus-name')).toBe('system-monitor');
      });
    });

    describe('Windows Explorer', () => {
      it('should exist', () => {
        expect(compiled.querySelector('.windows-explorer-start-item')).toBeTruthy();
      });

      it('should have proper icon', () => {
        expect(compiled.querySelector('.windows-explorer-start-item')?.getAttribute('icon')).toBe(
          'assets/icons/windows-explorer.svg',
        );
      });

      it('should have proper program name', () => {
        expect(compiled.querySelector('.windows-explorer-start-item')?.getAttribute('program-name')).toBe('Windows Explorer');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('.windows-explorer-start-item')?.getAttribute('focus-name')).toBe('windows-explorer');
      });
    });
  });
});
