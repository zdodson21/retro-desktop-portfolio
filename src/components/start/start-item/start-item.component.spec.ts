import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartItemComponent } from './start-item.component';

describe('StartItemComponent', () => {
  let component: StartItemComponent;
  let fixture: ComponentFixture<StartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
