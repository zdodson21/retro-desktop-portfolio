import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbarBaseComponent } from './taskbar-base.component';

describe('TaskbarBaseComponent', () => {
  let component: TaskbarBaseComponent;
  let fixture: ComponentFixture<TaskbarBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskbarBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
