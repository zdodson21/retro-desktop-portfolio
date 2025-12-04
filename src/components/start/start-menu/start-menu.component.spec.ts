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

  it('should be wrapped', () => {
    expect(compiled.querySelector('.start-menu-wrapper')).toBeTruthy();
  });

  it('should have proper img on left side', () => {
    expect(compiled.querySelector('.win-95-bar img')?.getAttribute('src')).toBe('assets/windows-95-text-start-menu.webp');
  });

  it('should contain start-shutdown component', () => {
    expect(compiled.querySelector('start-shutdown')).toBeTruthy();
  });

  it('should have a focus-name set on every <start-item> and subitem', () => {
    const START_ITEMS: NodeListOf<Element> = compiled.querySelectorAll('start-item');
    const SUBITEMS: NodeListOf<Element> = compiled.querySelectorAll('start-subitem');

    START_ITEMS.forEach((startItem) => {
      expect(startItem.getAttribute('focus-name')).toBeTruthy();
    });

    SUBITEMS.forEach((subitem) => {
      expect(subitem.getAttribute('focus-name')).toBeTruthy();
    });
  });

  it('should have an icon set on every <start-item> and subitem', () => {
    const START_ITEMS: NodeListOf<Element> = compiled.querySelectorAll('start-item');
    const SUBITEMS: NodeListOf<Element> = compiled.querySelectorAll('start-subitem');

    START_ITEMS.forEach((startItem) => {
      expect(startItem.getAttribute('icon')).toBeTruthy();
    });

    SUBITEMS.forEach((subitem) => {
      expect(subitem.getAttribute('icon')).toBeTruthy();
    });
  });

  it('should have a program-name set on every <start-item> and subitem', () => {
    const START_ITEMS: NodeListOf<Element> = compiled.querySelectorAll('start-item');
    const SUBITEMS: NodeListOf<Element> = compiled.querySelectorAll('start-subitem');

    START_ITEMS.forEach((startItem) => {
      expect(startItem.getAttribute('program-name')).toBeTruthy();
    });

    SUBITEMS.forEach((subitem) => {
      expect(subitem.getAttribute('program-name')).toBeTruthy();
    });
  });
});
