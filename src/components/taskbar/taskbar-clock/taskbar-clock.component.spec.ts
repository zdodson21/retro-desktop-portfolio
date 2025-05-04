import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskbarClockComponent } from './taskbar-clock.component';

describe('TaskbarClockComponent', () => {
  let component: TaskbarClockComponent;
  let fixture: ComponentFixture<TaskbarClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarClockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskbarClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
