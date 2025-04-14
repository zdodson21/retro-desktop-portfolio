import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMonitorComponent } from './system-monitor.component';

describe('SystemMonitorComponent', () => {
  let component: SystemMonitorComponent;
  let fixture: ComponentFixture<SystemMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
