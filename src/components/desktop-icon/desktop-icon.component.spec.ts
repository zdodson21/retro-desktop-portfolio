import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopIconComponent } from './desktop-icon.component';

describe('DesktopIconComponent', () => {
  let component: DesktopIconComponent;
  let fixture: ComponentFixture<DesktopIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
