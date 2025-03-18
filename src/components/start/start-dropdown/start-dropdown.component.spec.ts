import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDropdownComponent } from './start-dropdown.component';

describe('StartDropdownComponent', () => {
  let component: StartDropdownComponent;
  let fixture: ComponentFixture<StartDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
