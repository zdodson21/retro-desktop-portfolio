import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskbarProgramComponent } from './taskbar-program.component';

describe('TaskbarProgramComponent', () => {
  let component: TaskbarProgramComponent;
  let fixture: ComponentFixture<TaskbarProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarProgramComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskbarProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should not be focused by default', () => {
    expect(component.isProgramFocused()).toBeFalsy();
  });
});
