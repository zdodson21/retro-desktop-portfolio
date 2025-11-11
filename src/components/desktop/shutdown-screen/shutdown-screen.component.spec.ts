import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShutdownScreenComponent } from './shutdown-screen.component';

describe('ShutdownScreenComponent', () => {
  let component: ShutdownScreenComponent;
  let fixture: ComponentFixture<ShutdownScreenComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShutdownScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShutdownScreenComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must be wrapped', () => {
    expect(compiled.querySelector('.shutdown-screen-wrapper')).toBeTruthy();
  });

  // TODO this
  // it('must have 3 rows for proper CSS alignment', () => {

  // });
});
