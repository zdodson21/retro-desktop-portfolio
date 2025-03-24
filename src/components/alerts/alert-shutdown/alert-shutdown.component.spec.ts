import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertShutdownComponent } from './alert-shutdown.component';

describe('AlertShutdownComponent', () => {
  let component: AlertShutdownComponent;
  let fixture: ComponentFixture<AlertShutdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertShutdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertShutdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
