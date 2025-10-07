import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HaxChatAgentSite } from './hax-chat-agent.component';

describe('HaxChatAgentSite', () => {
  let component: HaxChatAgentSite;
  let fixture: ComponentFixture<HaxChatAgentSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaxChatAgentSite],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HaxChatAgentSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
