import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowFrameComponent } from './window-frame.component';

describe('WindowFrameComponent', () => {
  let component: WindowFrameComponent;
  let fixture: ComponentFixture<WindowFrameComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowFrameComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe("Buttons", () => {
    describe("Assets", () => {
      // TODO add test for minimize button

      it("should have proper starting view button icon", () => {
        expect(compiled.querySelector(".view-button > img")?.getAttribute("src")?.split('.')[0]).toBe("/assets/icons/view-maximize");
      });

      // TODO add test for changing view button icon

      it("should have proper close button icon", () => {
        expect(compiled.querySelector(".close-button > img")?.getAttribute("src")?.split('.')[0]).toBe("/assets/icons/close-button")
      });
    });

    describe("Hiding", () => {
      it("should not display minimize button on .hide-button", () => {
        const minimizeButton = compiled.querySelector(".minimize-button");
        minimizeButton?.classList.add("hide-button");

        expect(globalThis.getComputedStyle(minimizeButton as Element).display).toBe('none');
      });

      it("should not display view change button on .hide-button", () => {
        const viewButton = compiled.querySelector(".view-button");
        viewButton?.classList.add("hide-button")

        expect(globalThis.getComputedStyle(viewButton as Element).display).toBe('none');
      });
    });

    // TODO make something like this work
    // describe("Alerts", () => {
    //   it("should always be focused", () => {
    //     component.alert = true;

    //     expect(component.isElementFocused()).toBeTruthy();
    //   })
    // })
  });
});
