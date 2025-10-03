import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutdownScreenComponent } from './shutdown-screen.component';

describe('ShutdownScreenComponent', () => {
  let component: ShutdownScreenComponent;
  let fixture: ComponentFixture<ShutdownScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShutdownScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShutdownScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
