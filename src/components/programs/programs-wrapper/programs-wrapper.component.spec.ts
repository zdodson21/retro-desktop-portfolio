import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProgramsWrapperComponent } from './programs-wrapper.component';

describe('ProgramsWrapperComponent', () => {
  let component: ProgramsWrapperComponent;
  let fixture: ComponentFixture<ProgramsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsWrapperComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO test to make sure tags show up when their corresponding variables are set to true.
});
