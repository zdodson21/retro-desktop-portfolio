import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskbarBaseComponent } from './taskbar-base.component';

describe('TaskbarBaseComponent', () => {
  let component: TaskbarBaseComponent;
  let fixture: ComponentFixture<TaskbarBaseComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskbarBaseComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('Left Side Class', () => {
    // TODO make sure left side has taskbar start
    it('should contain <taskbar-start>', () => {
      expect(compiled.querySelector('.left-side > taskbar-start')).toBeTruthy();
    });

    // TODO make sure left side only has one child
    it('should only contain one child', () => {
      expect(compiled.querySelectorAll('.left-side > *').length).toBe(1);
    });
  });

  describe('Right Side Class', () => {
    it('should contain <taskbar-clock>', () => {
      expect(compiled.querySelector('.right-side > taskbar-clock')).toBeTruthy();
    });

    it('should only contain one child', () => {
      expect(compiled.querySelectorAll('.right-side > *').length).toBe(1);
    });
  });
});
