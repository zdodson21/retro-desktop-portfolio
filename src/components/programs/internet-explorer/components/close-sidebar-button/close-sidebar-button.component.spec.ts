import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSidebarButtonComponent } from './close-sidebar-button.component';

describe('CloseSidebarButtonComponent', () => {
  let component: CloseSidebarButtonComponent;
  let fixture: ComponentFixture<CloseSidebarButtonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseSidebarButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CloseSidebarButtonComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.close-sidebar-button-wrapper')).toBeTruthy();
  });

  it('should have proper icon', () => {
    expect(compiled.querySelector('img')?.getAttribute('src')).toBe('assets/icons/close-button.svg');
  });
});
