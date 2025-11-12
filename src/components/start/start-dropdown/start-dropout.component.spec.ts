import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartDropoutComponent } from './start-dropout.component';

describe('StartDropdownComponent', () => {
  let component: StartDropoutComponent;
  let fixture: ComponentFixture<StartDropoutComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartDropoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartDropoutComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be in container', () => {
    expect(compiled.querySelector('.container')).toBeTruthy();
  });

  it('must have dropdown wrapper', () => {
    expect(compiled.querySelector('.container .start-dropdown-wrapper')).toBeTruthy();
  });

  it('must have menu area', () => {
    expect(compiled.querySelector('.container .menu-space')).toBeTruthy();
  });
});
