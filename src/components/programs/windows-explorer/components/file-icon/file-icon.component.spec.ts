import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FileIconComponent } from './file-icon.component';

describe('FileIconComponent', () => {
  let component: FileIconComponent;
  let fixture: ComponentFixture<FileIconComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileIconComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FileIconComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('.file-icon-wrapper')).toBeTruthy();
  })

  it('should have spot for icon', () => {
    expect(compiled.querySelector('.file-icon-wrapper img')).toBeTruthy();
  })

  it('should have spot for text', () => {
    expect(compiled.querySelector('.file-icon-wrapper p')).toBeTruthy();
  })
});
