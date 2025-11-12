import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarItemComponent } from './toolbar-item.component';

describe('ToolbarItemComponent', () => {
  let component: ToolbarItemComponent;
  let fixture: ComponentFixture<ToolbarItemComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.toolbar-item-wrapper')).toBeTruthy();
  });

  it('should not be disabled by default', () => {
    expect(compiled.querySelector('.toolbar-item-wrapper')?.classList).not.toContain('disabled');
  });

  // TODO test disabled included when set

  // Test for left text to appear when left text set
  // Test for right text when set
  // Test for both when set
});
