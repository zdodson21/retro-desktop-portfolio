import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertBlockComponent } from './cert-block.component';

describe('CertBlockComponent', () => {
  let component: CertBlockComponent;
  let fixture: ComponentFixture<CertBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertBlockComponent);
    component = fixture.componentInstance;
    component.issueDate = {dateTimeString: 'Sample string'}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
