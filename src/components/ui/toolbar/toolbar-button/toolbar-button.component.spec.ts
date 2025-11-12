import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarButtonComponent } from './toolbar-button.component';

describe('ToolbarButtonComponent', () => {
  let component: ToolbarButtonComponent;
  let fixture: ComponentFixture<ToolbarButtonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarButtonComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container', () => {
    expect(compiled.querySelector('.container')).toBeTruthy();
  });

  it('should have a button wrapper', () => {
    expect(compiled.querySelector('.toolbar-button-wrapper')).toBeTruthy();
  });

  it('should have space for text', () => {
    expect(compiled.querySelector('.toolbar-button-wrapper p')).toBeTruthy();
  });

  // Test rendering when text attr is set

  it('should have space for menu', () => {
    expect(compiled.querySelector('.container .menu-space')).toBeTruthy();
  })
});
