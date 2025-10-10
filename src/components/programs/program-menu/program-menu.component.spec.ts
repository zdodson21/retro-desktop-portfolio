import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProgramMenuComponent } from './program-menu.component';

describe('ProgramMenuComponent', () => {
  let component: ProgramMenuComponent;
  let fixture: ComponentFixture<ProgramMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramMenuComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
