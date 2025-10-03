import { Component, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'shutdown-screen',
  imports: [],
  templateUrl: './shutdown-screen.component.html',
  styleUrl: './shutdown-screen.component.scss'
})
export class ShutdownScreenComponent {
  private store: AppService = inject(AppService);

  protected reloadPage(): void {
    globalThis.location.href = this.store.webAddress;
  }
}
