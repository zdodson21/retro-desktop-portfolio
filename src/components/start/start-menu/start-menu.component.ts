import { Component, inject } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { StartDropoutComponent } from '../start-dropdown/start-dropout.component';
import { StartItemComponent } from '../start-item/start-item.component';
import { StartShutdownComponent } from '../start-shutdown/start-shutdown.component';
import { StartSubdropoutComponent } from '../start-subdropout/start-subdropout.component';
import { StartSubitemComponent } from '../start-subitem/start-subitem.component';
import { StartSubmenuComponent } from '../start-submenu/start-submenu.component';
import { SystemService } from '../../../services/system/system.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'start-menu',
  imports: [
    StartDropoutComponent,
    StartItemComponent,
    StartShutdownComponent,
    StartSubdropoutComponent,
    StartSubitemComponent,
    StartSubmenuComponent,
  ],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss',
})
export class StartMenuComponent {
  private store: AppService = inject(AppService);
  protected systemService: SystemService = inject(SystemService);
  protected devMode: boolean = environment.devMode;

  /**
   * @description sets focus to "start-menu"
   * @param event Mouse click event
   */
  protected clickHandler(event: MouseEvent): void {
    event?.stopPropagation();
    this.store.focus.set('start-menu');
  }
}
