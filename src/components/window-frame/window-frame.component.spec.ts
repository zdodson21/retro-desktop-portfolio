import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowFrameComponent } from './window-frame.component';

describe('WindowFrameComponent', () => {
  let component: WindowFrameComponent;
  let fixture: ComponentFixture<WindowFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
