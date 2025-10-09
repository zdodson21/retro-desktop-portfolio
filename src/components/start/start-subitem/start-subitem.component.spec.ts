import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { StartSubitemComponent } from './start-subitem.component';

describe('StartSubitemComponent', () => {
  let component: StartSubitemComponent;
  let fixture: ComponentFixture<StartSubitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSubitemComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
