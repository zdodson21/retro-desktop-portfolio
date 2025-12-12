import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintToolComponent } from './paint-tool.component';

describe('PaintToolComponent', () => {
  let component: PaintToolComponent;
  let fixture: ComponentFixture<PaintToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
