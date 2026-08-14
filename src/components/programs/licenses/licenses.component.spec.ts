import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesComponent } from './licenses.component';
import { provideRouter } from '@angular/router';

describe('LicensesComponent', () => {
  let component: LicensesComponent;
  let fixture: ComponentFixture<LicensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicensesComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
