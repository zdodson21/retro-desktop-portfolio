import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbarPropertiesComponent } from './taskbar-properties.component';

describe('TaskbarPropertiesComponent', () => {
  let component: TaskbarPropertiesComponent;
  let fixture: ComponentFixture<TaskbarPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarPropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskbarPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
