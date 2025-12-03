import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MyComputerComponent } from './my-computer.component';

describe('MyComputerComponent', () => {
  let component: MyComputerComponent;
  let fixture: ComponentFixture<MyComputerComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComputerComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComputerComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapped', () => {
    expect(compiled.querySelector('.my-computer-wrapper')).toBeTruthy();
  });

  describe('Structure', () => {
    describe('Window Frame', () => {
      it('should have proper window title', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-title')).toBe('My Computer');
      });

      it('should have proper focus name', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('focus-name')).toBe('my-computer');
      });

      it('should have proper icon path', () => {
        expect(compiled.querySelector('window-frame')?.getAttribute('window-icon')).toBe('assets/icons/my-computer.svg');
      });

      // TODO test prevent resizing true and hide buttons true
    });

    it('should contain a frame contents wrapper', () => {
      expect(compiled.querySelector('window-frame .frame-contents')).toBeTruthy();
    });
  });

  it('should use proper image', () => {
    expect(compiled.querySelector('.left .img-wrapper img')?.getAttribute('src')).toBe('assets/monitor-image.webp');
  });

  describe('Sections', () => {
    it('should have proper sections', () => {
      let captions = compiled.querySelectorAll('figcaption');
      let captionTexts = ['System:', 'Registered to:', 'Computer:'];
      let system = false;
      let registered = false;
      let computer = false;

      captions.forEach((item) => {
        if (item.innerText === captionTexts[0]) system = true;
        if (item.innerText === captionTexts[1]) registered = true;
        if (item.innerText === captionTexts[2]) computer = true;
      });

      expect(system).toBeTrue();
      expect(registered).toBeTrue();
      expect(computer).toBeTrue();
    });
  });
});
