import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitTemplateComponent } from './mit-template.component';

describe('MitTemplateComponent', () => {
  let component: MitTemplateComponent;
  let fixture: ComponentFixture<MitTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MitTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
