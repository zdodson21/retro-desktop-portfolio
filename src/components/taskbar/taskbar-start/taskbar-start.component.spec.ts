import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskbarStartComponent } from './taskbar-start.component';

describe('TaskbarStartComponent', () => {
  let component: TaskbarStartComponent;
  let fixture: ComponentFixture<TaskbarStartComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbarStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskbarStartComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe("Design", () => {
    it('should hae the proper icon', () => {
      expect(compiled.querySelector(".contents > img")?.getAttribute("src")?.split('.')[0]).toBe("/assets/icons/start");
    })

    it('should have proper text', () => {
      expect(compiled.querySelector(".contents > p")?.textContent).toBe("Start");
    })
  })

  describe("Logic", () => {
    it('should not be clicked by default', () => {
      expect(component.isStartClicked()).toBeFalsy();
    })
  })
});
