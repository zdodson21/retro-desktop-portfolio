import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarItemComponent } from './toolbar-item.component';

describe('ToolbarItemComponent', () => {
  let component: ToolbarItemComponent;
  let fixture: ComponentFixture<ToolbarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
