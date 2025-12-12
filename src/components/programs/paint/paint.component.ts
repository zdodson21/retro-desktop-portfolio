import { Component, inject, ViewChild } from '@angular/core';
import { Coordinates } from '../../../interfaces/coordinates';
import { ToolbarButtonComponent } from '../../ui/toolbar/toolbar-button/toolbar-button.component';
import { ToolbarDividerComponent } from '../../ui/toolbar/toolbar-divider/toolbar-divider.component';
import { ToolbarDropoutComponent } from '../../ui/toolbar/toolbar-dropout/toolbar-dropout.component';
import { ToolbarItemComponent } from '../../ui/toolbar/toolbar-item/toolbar-item.component';
import { ToolbarMenuComponent } from '../../ui/toolbar/toolbar-menu/toolbar-menu.component';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { PaintService } from './paint.service';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'paint',
  imports: [
    ToolbarButtonComponent,
    ToolbarDividerComponent,
    ToolbarItemComponent,
    ToolbarMenuComponent,
    WindowFrameComponent,
  ],
  templateUrl: './paint.component.html',
  styleUrl: './paint.component.scss',
})
export class PaintProgram {
  @ViewChild('windowFrame') private windowFrame?: WindowFrameComponent;

  protected store: AppService = inject(AppService);
  protected paintService: PaintService = inject(PaintService);

  protected menuFocus: string = '';
  private readonly toolbarButtons = ['file', 'edit', 'view', 'image', 'options', 'help'];

  protected coord: Coordinates = {
    x: 0,
    y: 0,
  };

  /**
   * @description support toolbar button operations
   * @param event Mouse event
   * @param button button label string
   */
  protected toolbarButtonHelper(event: MouseEvent, button: string): string {
    event.stopPropagation();

    if (this.menuFocus === '' && this.toolbarButtons.includes(button)) return button;

    return '';
  }

  /**
   * @description support toolbar button hover operations
   * @param button button label string
   */
  protected toolbarHoverHelper(button: string): void {
    if (this.toolbarButtons.includes(this.menuFocus)) this.menuFocus = button;
  }

  /**
   * @description clears HTML canvas
   */
  protected setNewCanvas(): void {

  }

  /**
   * @description saves HTML canvas drawing to PNG
   */
  protected saveDrawing(): void {

  }

  /**
   * @description opens HTML canvas drawing in browser printer dialog
   */
  protected printDrawing(): void {

  }

  /**
   * @description opens email client with HTML canvas drawing prepopulated
   */
  protected sendDrawing(): void {

  }

  /**
   * @description Closes Paint window
   */
  protected exitHandler(): void {
    this.windowFrame?.closeButtonHandler();
  }

  /**
   * @description undoes recent operations
   */
  protected undoHandler(): void {

  }

  /**
   * @description repeats undone operations
   */
  protected repeatHandler(): void {

  }

  /**
   * @description zooms HTML canvas
   */
  protected zoomHandler(): void {

  }


}
