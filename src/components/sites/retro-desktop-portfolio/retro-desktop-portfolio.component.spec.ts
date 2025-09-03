import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroDesktopPortfolioComponent } from './retro-desktop-portfolio.component';

describe('RetroDesktopPortfolioComponent', () => {
  let component: RetroDesktopPortfolioComponent;
  let fixture: ComponentFixture<RetroDesktopPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroDesktopPortfolioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RetroDesktopPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
