import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { InternetExplorerComponent } from './internet-explorer.component';

describe('InternetExplorerComponent', () => {
  let component: InternetExplorerComponent;
  let fixture: ComponentFixture<InternetExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetExplorerComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(InternetExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
