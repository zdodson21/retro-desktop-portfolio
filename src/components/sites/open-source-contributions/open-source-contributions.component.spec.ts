import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { OpenSourceContributionsSite } from './open-source-contributions.component';

describe('OpenSourceContributionsSite', () => {
  let component: OpenSourceContributionsSite;
  let fixture: ComponentFixture<OpenSourceContributionsSite>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenSourceContributionsSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(OpenSourceContributionsSite);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.osc-site-wrapper')).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });
});
