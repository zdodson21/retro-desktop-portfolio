import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartDropdownComponent } from './start-dropdown.component';

describe('StartDropdownComponent', () => {
  let component: StartDropdownComponent;
  let fixture: ComponentFixture<StartDropdownComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartDropdownComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  // it('should have the proper arrow icon', () => {
  //   expect(compiled.querySelector('.arrow')?.getAttribute('src')).toBe('assets/icons/submenu-arrow.svg');
  // });
});
