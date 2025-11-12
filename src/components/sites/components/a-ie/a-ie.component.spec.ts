import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIeComponent } from './a-ie.component';

describe('AIeComponent', () => {
  let component: AIeComponent;
  let fixture: ComponentFixture<AIeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AIeComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be in dark mode by default', () => {
    expect(compiled.querySelector('.dark-mode')).toBeFalsy();
  });

  it('must open link in real new tab', () => {
    expect(compiled.querySelector('a')?.getAttribute('target')).toBe('_blank');
  });
});
