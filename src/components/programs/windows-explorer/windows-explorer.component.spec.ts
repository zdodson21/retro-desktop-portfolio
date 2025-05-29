import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsExplorerComponent } from './windows-explorer.component';

describe('WindowsExplorerComponent', () => {
  let component: WindowsExplorerComponent;
  let fixture: ComponentFixture<WindowsExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
