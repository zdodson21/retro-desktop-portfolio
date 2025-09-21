import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { WindowsExplorerComponent } from './windows-explorer.component';

describe('WindowsExplorerComponent', () => {
  let component: WindowsExplorerComponent;
  let fixture: ComponentFixture<WindowsExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsExplorerComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WindowsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
