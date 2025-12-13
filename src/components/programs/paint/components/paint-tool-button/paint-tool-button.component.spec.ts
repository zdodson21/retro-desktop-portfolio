import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintToolButtonComponent } from './paint-tool-button.component';

describe('PaintToolButtonComponent', () => {
  let component: PaintToolButtonComponent;
  let fixture: ComponentFixture<PaintToolButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintToolButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintToolButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
