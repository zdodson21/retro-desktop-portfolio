import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartItemComponent } from './start-item.component';
import { provideRouter } from '@angular/router';

describe('StartItemComponent', () => {
  let component: StartItemComponent;
  let fixture: ComponentFixture<StartItemComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartItemComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StartItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.start-item-wrapper')).toBeTruthy();
  })

  it('must have an img space', () => {
    expect(compiled.querySelector('.start-item-wrapper img')).toBeTruthy();
  })

  it('must have text space', () => {
    expect(compiled.querySelector('.start-item-wrapper p')).toBeTruthy();
  })
});
