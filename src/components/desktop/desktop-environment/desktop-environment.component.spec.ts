import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopEnvironmentComponent } from './desktop-environment.component';

describe('DesktopEnvironmentComponent', () => {
  let component: DesktopEnvironmentComponent;
  let fixture: ComponentFixture<DesktopEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopEnvironmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
