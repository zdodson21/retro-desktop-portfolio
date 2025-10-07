import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIeComponent } from './a-ie.component';

describe('AIeComponent', () => {
  let component: AIeComponent;
  let fixture: ComponentFixture<AIeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
