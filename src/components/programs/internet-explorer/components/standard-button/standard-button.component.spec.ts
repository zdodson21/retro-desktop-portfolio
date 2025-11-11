import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandardButtonComponent } from './standard-button.component';

describe('StandardButtonComponent', () => {
  let component: StandardButtonComponent;
  let fixture: ComponentFixture<StandardButtonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StandardButtonComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.componentRef.setInput('button-name', 'test');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.standard-button-wrapper')).toBeTruthy();
  });

  describe('img space', () => {
    it('should have an img wrapper', () => {
      expect(compiled.querySelector('.standard-button-wrapper .img')).toBeTruthy();
    });

    it('should have an img tag', () => {
      expect(compiled.querySelector('.img img')).toBeTruthy();
    });
  });

  it('should have a space for text', () => {
    expect(compiled.querySelector('.standard-button-wrapper p')).toBeTruthy();
  })
});
