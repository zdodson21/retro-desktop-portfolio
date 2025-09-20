import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComputerComponent } from './my-computer.component';

describe('MyComputerComponent', () => {
  let component: MyComputerComponent;
  let fixture: ComponentFixture<MyComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComputerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
