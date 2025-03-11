import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbarStartComponent } from './taskbar-start.component';

describe('TaskbarStartComponent', () => {
  let component: TaskbarStartComponent;
  let fixture: ComponentFixture<TaskbarStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskbarStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
