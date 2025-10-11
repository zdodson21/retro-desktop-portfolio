import { Component, inject } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'hax-chat-agent',
  imports: [AIeComponent],
  templateUrl: './hax-chat-agent.component.html',
  styleUrl: './hax-chat-agent.component.scss',
})
export class HaxChatAgentSite {
  protected systemService: SystemService = inject(SystemService);
}
