import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskbarProgramComponent } from './taskbar-program.component';

describe('TaskbarProgramComponent', () => {
  let component: TaskbarProgramComponent;
  let fixture: ComponentFixture<TaskbarProgramComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarProgramComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskbarProgramComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.taskbar-program-wrapper')).toBeTruthy();
  })

  // TODO test for image

  it('should have space for text', () => {
    expect(compiled.querySelector('.taskbar-program-wrapper p')).toBeTruthy();
  })
});
