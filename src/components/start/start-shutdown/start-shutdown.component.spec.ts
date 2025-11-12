import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartShutdownComponent } from './start-shutdown.component';

describe('StartShutdownComponent', () => {
  let component: StartShutdownComponent;
  let fixture: ComponentFixture<StartShutdownComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartShutdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartShutdownComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.start-shutdown-wrapper')).toBeTruthy();
  });

  it('should have the proper icon', () => {
    expect(compiled.querySelector('.start-shutdown-wrapper > img')?.getAttribute('src')).toBe('assets/icons/shutdown.svg');
  });

  it('should have text "Shutdown"', () => {
    expect(compiled.querySelector('.start-shutdown-wrapper > p')?.textContent).toBe('Shutdown');
  });

  // TODO figure out if I can click the component in test then check to ensure variables in service were set properly
});
