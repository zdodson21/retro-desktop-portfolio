import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdosPromptComponent } from './msdos-prompt.component';

describe('MsdosPromptComponent', () => {
  let component: MsdosPromptComponent;
  let fixture: ComponentFixture<MsdosPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsdosPromptComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MsdosPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
