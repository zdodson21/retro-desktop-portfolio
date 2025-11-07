import { Component, inject, Input } from '@angular/core';
import { AIeComponent } from '../components/a-ie/a-ie.component';
import { SystemService } from '../../../services/system/system.service';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';

@Component({
  selector: 'hax-chat-agent',
  imports: [AIeComponent],
  templateUrl: './hax-chat-agent.component.html',
  styleUrl: './hax-chat-agent.component.scss',
})
export class HaxChatAgentSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);

  protected systemService: SystemService = inject(SystemService);
}
