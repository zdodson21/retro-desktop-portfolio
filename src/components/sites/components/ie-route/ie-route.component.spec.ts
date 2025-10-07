import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { IeRouteComponent } from './ie-route.component';

describe('IeRouteComponent', () => {
  let component: IeRouteComponent;
  let fixture: ComponentFixture<IeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IeRouteComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(IeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
