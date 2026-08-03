import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjallarhornComponent } from './gjallarhorn.component';

describe('GjallarhornComponent', () => {
  let component: GjallarhornComponent;
  let fixture: ComponentFixture<GjallarhornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GjallarhornComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GjallarhornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO when adding the badge tests, create a class and a common function to use for this.
});
