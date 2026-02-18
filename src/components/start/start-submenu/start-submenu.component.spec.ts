import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartSubmenuComponent } from './start-submenu.component';

describe('StartSubmenuComponent', () => {
  let component: StartSubmenuComponent;
  let fixture: ComponentFixture<StartSubmenuComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSubmenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartSubmenuComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have wrapper', () => {
    expect(compiled.querySelector('menu')).toBeTruthy();
  });
});
