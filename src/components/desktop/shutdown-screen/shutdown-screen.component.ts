import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'shutdown-screen',
  imports: [],
  templateUrl: './shutdown-screen.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './shutdown-screen.component.scss',
})
export class ShutdownScreenComponent {
  private systemService: SystemService = inject(SystemService);

  protected reloadPage(): void {
    globalThis.location.href = this.systemService.webAddress;
  }
}
