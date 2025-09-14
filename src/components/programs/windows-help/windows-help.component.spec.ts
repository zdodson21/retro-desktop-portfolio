import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsHelpComponent } from './windows-help.component';

describe('WindowsHelpComponent', () => {
  let component: WindowsHelpComponent;
  let fixture: ComponentFixture<WindowsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsHelpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WindowsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
