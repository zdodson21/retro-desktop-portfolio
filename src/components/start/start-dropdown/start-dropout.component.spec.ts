import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartDropoutComponent } from './start-dropout.component';

describe('StartDropdownComponent', () => {
  let component: StartDropoutComponent;
  let fixture: ComponentFixture<StartDropoutComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartDropoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartDropoutComponent);
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
