import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RetroDesktopPortfolioSite } from './retro-desktop-portfolio.component';

describe('RetroDesktopPortfolioSite', () => {
  let component: RetroDesktopPortfolioSite;
  let fixture: ComponentFixture<RetroDesktopPortfolioSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroDesktopPortfolioSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RetroDesktopPortfolioSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
