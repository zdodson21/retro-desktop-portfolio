import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskbarStartComponent } from './taskbar-start.component';

describe('TaskbarStartComponent', () => {
  let component: TaskbarStartComponent;
  let fixture: ComponentFixture<TaskbarStartComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarStartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskbarStartComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('Design', () => {
    it('should have the proper icon', () => {
      expect(compiled.querySelector('.contents > img')?.getAttribute('src')).toBe('assets/icons/start.svg');
    });

    it('should have proper text', () => {
      expect(compiled.querySelector('.contents > p')?.textContent).toBe('Start');
    });
  });

});
