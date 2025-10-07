import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SmallProjectsSite } from './small-projects.component';

describe('SmallProjectsSite', () => {
  let component: SmallProjectsSite;
  let fixture: ComponentFixture<SmallProjectsSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallProjectsSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SmallProjectsSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
