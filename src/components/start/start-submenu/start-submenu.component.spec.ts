import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSubmenuComponent } from './start-submenu.component';

describe('StartSubmenuComponent', () => {
  let component: StartSubmenuComponent;
  let fixture: ComponentFixture<StartSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSubmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
