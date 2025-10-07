import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SecretSite } from './secret-site.component';

describe('SecretSiteComponent', () => {
  let component: SecretSite;
  let fixture: ComponentFixture<SecretSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretSite],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
