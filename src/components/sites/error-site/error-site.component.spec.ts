import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ErrorSite } from './error-site.component';

describe('ErrorSiteComponent', () => {
  let component: ErrorSite;
  let fixture: ComponentFixture<ErrorSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorSite],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
