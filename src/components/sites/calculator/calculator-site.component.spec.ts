import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSiteComponent } from './calculator-site.component';

describe('CalculatorComponent', () => {
  let component: CalculatorSiteComponent;
  let fixture: ComponentFixture<CalculatorSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorSiteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
