import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TaskbarPropertiesComponent } from './taskbar-properties.component';

describe('TaskbarPropertiesComponent', () => {
  let component: TaskbarPropertiesComponent;
  let fixture: ComponentFixture<TaskbarPropertiesComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarPropertiesComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskbarPropertiesComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a wrapper', () => {
    expect(compiled.querySelector('.taskbar-properties-wrapper')).toBeTruthy();
  });

  describe('Structure', () => {
    describe('Window Frame', () => {
      it('should have proper window title', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('Taskbar Properties');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('taskbar-properties');
      });
    });

    it('should have a frame contents wrapper', () => {
      expect(compiled.querySelector('window-frame .frame-contents')).toBeTruthy();
    });
  });
});
