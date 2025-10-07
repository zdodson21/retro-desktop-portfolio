import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { OpenSourceContributionsSite } from './open-source-contributions.component';

describe('OpenSourceContributionsSite', () => {
  let component: OpenSourceContributionsSite;
  let fixture: ComponentFixture<OpenSourceContributionsSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenSourceContributionsSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(OpenSourceContributionsSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
