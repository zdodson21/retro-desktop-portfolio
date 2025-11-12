import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMenuComponent } from './toolbar-menu.component';

describe('ToolbarMenuComponent', () => {
  let component: ToolbarMenuComponent;
  let fixture: ComponentFixture<ToolbarMenuComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarMenuComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.toolbar-menu-wrapper')).toBeTruthy();
  });
});
