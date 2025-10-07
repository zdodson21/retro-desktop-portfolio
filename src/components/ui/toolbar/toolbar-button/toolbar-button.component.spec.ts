import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarButtonComponent } from './toolbar-button.component';

describe('ToolbarButtonComponent', () => {
  let component: ToolbarButtonComponent;
  let fixture: ComponentFixture<ToolbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
