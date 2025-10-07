import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopIconComponent } from './desktop-icon.component';
import { provideRouter } from '@angular/router';

describe('DesktopIconComponent', () => {
  let component: DesktopIconComponent;
  let fixture: ComponentFixture<DesktopIconComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopIconComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopIconComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('Active State', () => {
    // it('should not be focused by default', () => {
    //   expect(component.isElementFocused()).toBeFalsy();
    // });

    it('wrapper should not have .active by default', () => {
      expect(compiled.querySelector('.desktop-icon-wrapper')?.classList.contains('active')).toBeFalsy();
    });
  });
});
