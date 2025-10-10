import { Component, inject } from '@angular/core';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'shutdown-screen',
  imports: [],
  templateUrl: './shutdown-screen.component.html',
  styleUrl: './shutdown-screen.component.scss',
})
export class ShutdownScreenComponent {
  private systemService: SystemService = inject(SystemService);

  protected reloadPage(): void {
    globalThis.location.href = this.systemService.webAddress;
  }
}
