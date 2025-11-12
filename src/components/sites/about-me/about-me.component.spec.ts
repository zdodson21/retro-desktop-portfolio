import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AboutMeSite } from './about-me.component';

describe('AboutMeSite', () => {
  let component: AboutMeSite;
  let fixture: ComponentFixture<AboutMeSite>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeSite);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.about-me-site-wrapper')).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });
});
