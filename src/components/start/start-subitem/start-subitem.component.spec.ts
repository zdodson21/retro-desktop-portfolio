import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { StartSubitemComponent } from './start-subitem.component';

describe('StartSubitemComponent', () => {
  let component: StartSubitemComponent;
  let fixture: ComponentFixture<StartSubitemComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSubitemComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StartSubitemComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.start-subitem-wrapper')).toBeTruthy();
  });

  it('should have space for icon', () => {
    expect(compiled.querySelector('.start-subitem-wrapper img')).toBeTruthy();
  });

  it('should have space for text', () => {
    expect(compiled.querySelector('.start-subitem-wrapper p')).toBeTruthy();
  });
});
