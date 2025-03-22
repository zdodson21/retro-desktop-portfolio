import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAlertComponent } from './desktop-alert.component';

describe('DesktopAlertComponent', () => {
  let component: DesktopAlertComponent;
  let fixture: ComponentFixture<DesktopAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
