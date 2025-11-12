import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarDropoutComponent } from './toolbar-dropout.component';

describe('ToolbarDropoutComponent', () => {
  let component: ToolbarDropoutComponent;
  let fixture: ComponentFixture<ToolbarDropoutComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarDropoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarDropoutComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must be in a container', () => {
    expect(compiled.querySelector('.container')).toBeTruthy();
  });

  describe('dropout wrapper', () => {
    it('must exist', () => {
      expect(compiled.querySelector('.container .toolbar-dropout-wrapper')).toBeTruthy();
    });

    it('must not be hovered by default', () => {
      expect(compiled.querySelector('.container .toolbar-dropout-wrapper')?.classList).not.toContain('hovered');
    });

    describe('text', () => {
      it('must have space for text', () => {
        expect(compiled.querySelector('.toolbar-dropout-wrapper p')).toBeTruthy();
      });

      // TODO test to make sure text renders in appropriate spot when text var is set
    })

    describe('arrow img', () => {
      it('must exist', () => {
        expect(compiled.querySelector('.toolbar-dropout-wrapper img')).toBeTruthy();
      });

      it('must have arrow class', () => {
        expect(compiled.querySelector('.toolbar-dropout-wrapper img')?.classList).toContain('arrow');
      });

      it('must have black arrow by default', () => {
        expect(compiled.querySelector('.toolbar-dropout-wrapper img')?.getAttribute('src')).toBe('assets/icons/submenu-arrow.svg',);
      });

      // todo test hover
    });
  });

  describe('Menu space', () => {
    it('must exist', () => {
      expect(compiled.querySelector('.container .menu-space')).toBeTruthy();
    });

    it('must not be visible by default', () => {
      expect(compiled.querySelector('.container .menu-space')?.classList).not.toContain('visible');
    });
  });
});
