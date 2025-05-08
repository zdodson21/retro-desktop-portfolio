import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaxAuditComponent } from './hax-audit.component';

describe('HaxAuditComponent', () => {
  let component: HaxAuditComponent;
  let fixture: ComponentFixture<HaxAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaxAuditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaxAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
