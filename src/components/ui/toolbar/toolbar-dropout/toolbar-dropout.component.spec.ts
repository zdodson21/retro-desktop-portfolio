import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarDropoutComponent } from './toolbar-dropout.component';

describe('ToolbarDropoutComponent', () => {
  let component: ToolbarDropoutComponent;
  let fixture: ComponentFixture<ToolbarDropoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarDropoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarDropoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
