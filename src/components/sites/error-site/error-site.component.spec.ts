import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ErrorSite } from './error-site.component';

describe('ErrorSiteComponent', () => {
  let component: ErrorSite;
  let fixture: ComponentFixture<ErrorSite>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorSite);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.error-site-wrapper')).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });
});
