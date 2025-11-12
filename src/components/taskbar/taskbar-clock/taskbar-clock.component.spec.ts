import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskbarClockComponent } from './taskbar-clock.component';

describe('TaskbarClockComponent', () => {
  let component: TaskbarClockComponent;
  let fixture: ComponentFixture<TaskbarClockComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarClockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskbarClockComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.clock-wrapper')).toBeTruthy();
  });

  it('should have space for clock', () => {
    expect(compiled.querySelector('.clock-wrapper p')).toBeTruthy();
  });
});
