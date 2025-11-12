import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpButtonComponent } from './help-button.component';

describe('HelpButtonComponent', () => {
  let component: HelpButtonComponent;
  let fixture: ComponentFixture<HelpButtonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpButtonComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must be wrapped', () => {
    expect(compiled.querySelector('.help-button-wrapper')).toBeTruthy();
  });

  describe('Structure', () => {
    describe('Square', () => {
      it('must exist', () => {
        expect(compiled.querySelector('.square')).toBeTruthy();
      });

      it('must not be active', () => {
        expect(compiled.querySelector('.square.active')).toBeFalsy();
        expect(compiled.querySelector('.inner-square.active')).toBeFalsy();
      });
    });

    describe('Text', () => {
      it('must exist', () => {
        expect(compiled.querySelector('p')).toBeTruthy();
      });

      it('must not be active by default', () => {
        expect(compiled.querySelector('p.active')).toBeFalsy();
      });
    });
  });
});
