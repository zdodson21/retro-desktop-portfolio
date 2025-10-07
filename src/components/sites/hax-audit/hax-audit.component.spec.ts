import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HaxAuditSite } from './hax-audit.component';

describe('HaxAuditSite', () => {
  let component: HaxAuditSite;
  let fixture: ComponentFixture<HaxAuditSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaxAuditSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HaxAuditSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
