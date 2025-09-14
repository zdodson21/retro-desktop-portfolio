import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProjectsComponent } from './small-projects.component';

describe('SmallProjectsComponent', () => {
  let component: SmallProjectsComponent;
  let fixture: ComponentFixture<SmallProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmallProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
