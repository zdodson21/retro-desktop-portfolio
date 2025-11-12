import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarDividerComponent } from './toolbar-divider.component';

describe('ToolbarDividerComponent', () => {
  let component: ToolbarDividerComponent;
  let fixture: ComponentFixture<ToolbarDividerComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarDividerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarDividerComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.toolbar-divider-wrapper')).toBeTruthy();
  });

  it('must have the divider', () => {
    expect(compiled.querySelector('.toolbar-divider-wrapper .divider')).toBeTruthy();
  });
});
