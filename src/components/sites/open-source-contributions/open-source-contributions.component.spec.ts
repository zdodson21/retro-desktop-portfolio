import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceContributionsComponent } from './open-source-contributions.component';

describe('OpenSourceContributionsComponent', () => {
  let component: OpenSourceContributionsComponent;
  let fixture: ComponentFixture<OpenSourceContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenSourceContributionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenSourceContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
