import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZachDodsonComponent } from './zach-dodson.component';

describe('ZachDodsonComponent', () => {
  let component: ZachDodsonComponent;
  let fixture: ComponentFixture<ZachDodsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZachDodsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZachDodsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
