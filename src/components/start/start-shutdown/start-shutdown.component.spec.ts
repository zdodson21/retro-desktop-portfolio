import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartShutdownComponent } from './start-shutdown.component';

describe('StartShutdownComponent', () => {
  let component: StartShutdownComponent;
  let fixture: ComponentFixture<StartShutdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartShutdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartShutdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
