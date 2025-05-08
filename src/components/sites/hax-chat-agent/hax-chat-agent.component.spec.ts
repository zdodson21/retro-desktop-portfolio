import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaxChatAgentComponent } from './hax-chat-agent.component';

describe('HaxChatAgentComponent', () => {
  let component: HaxChatAgentComponent;
  let fixture: ComponentFixture<HaxChatAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaxChatAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaxChatAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
