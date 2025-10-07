import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AboutMeSite } from './about-me.component';

describe('AboutMeSite', () => {
  let component: AboutMeSite;
  let fixture: ComponentFixture<AboutMeSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
