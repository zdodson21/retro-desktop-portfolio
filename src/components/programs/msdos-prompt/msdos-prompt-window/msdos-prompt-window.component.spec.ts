import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdosPromptWindowComponent } from './msdos-prompt-window.component';

describe('MsdosPromptWindowComponent', () => {
  let component: MsdosPromptWindowComponent;
  let fixture: ComponentFixture<MsdosPromptWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsdosPromptWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsdosPromptWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
