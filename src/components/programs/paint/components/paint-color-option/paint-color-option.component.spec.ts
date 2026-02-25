import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintColorOptionComponent } from './paint-color-option.component';

describe('PaintColorOptionComponent', () => {
  let component: PaintColorOptionComponent;
  let fixture: ComponentFixture<PaintColorOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintColorOptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaintColorOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
