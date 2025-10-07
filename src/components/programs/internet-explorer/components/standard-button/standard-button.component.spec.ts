import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandardButtonComponent } from './standard-button.component';

describe('StandardButtonComponent', () => {
  let component: StandardButtonComponent;
  let fixture: ComponentFixture<StandardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StandardButtonComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('button-name', 'test');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
