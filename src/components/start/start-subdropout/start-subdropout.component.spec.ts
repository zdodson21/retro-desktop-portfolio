import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSubdropoutComponent } from './start-subdropout.component';

describe('StartSubdropoutComponent', () => {
  let component: StartSubdropoutComponent;
  let fixture: ComponentFixture<StartSubdropoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSubdropoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSubdropoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
