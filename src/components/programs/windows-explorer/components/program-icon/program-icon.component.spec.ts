import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramIconComponent } from './program-icon.component';

describe('ProgramIconComponent', () => {
  let component: ProgramIconComponent;
  let fixture: ComponentFixture<ProgramIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
