import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartMenuComponent } from './start-menu.component';
import { provideRouter } from '@angular/router';

describe('StartMenuComponent', () => {
  let component: StartMenuComponent;
  let fixture: ComponentFixture<StartMenuComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StartMenuComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain start-shutdown component', () => {
    expect(compiled.querySelector('start-shutdown')).toBeTruthy();
  });

  it('should have a focus-name set on every <start-item>', () => {
    const START_ITEMS: NodeListOf<Element> = compiled.querySelectorAll('start-item');

    START_ITEMS.forEach((startItem) => {
      expect(startItem.getAttribute('focus-name')).toBeTruthy();
    });
  });
});
