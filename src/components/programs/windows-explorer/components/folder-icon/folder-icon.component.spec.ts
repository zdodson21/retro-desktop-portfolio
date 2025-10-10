import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderIconComponent } from './folder-icon.component';

describe('FolderIconComponent', () => {
  let component: FolderIconComponent;
  let fixture: ComponentFixture<FolderIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
