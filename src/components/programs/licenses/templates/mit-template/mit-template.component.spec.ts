import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitTemplate } from './mit-template.component';

describe('MitTemplate', () => {
  let component: MitTemplate;
  let fixture: ComponentFixture<MitTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(MitTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
