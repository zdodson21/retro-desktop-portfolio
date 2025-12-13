import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { Coordinates } from '../../../interfaces/coordinates';
import { ToolbarButtonComponent } from '../../ui/toolbar/toolbar-button/toolbar-button.component';
import { ToolbarDividerComponent } from '../../ui/toolbar/toolbar-divider/toolbar-divider.component';
import { ToolbarItemComponent } from '../../ui/toolbar/toolbar-item/toolbar-item.component';
import { ToolbarMenuComponent } from '../../ui/toolbar/toolbar-menu/toolbar-menu.component';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { PaintService } from './paint.service';

@Component({
  selector: 'paint',
  imports: [ToolbarButtonComponent, ToolbarDividerComponent, ToolbarItemComponent, ToolbarMenuComponent, WindowFrameComponent],
  templateUrl: './paint.component.html',
  styleUrl: './paint.component.scss',
})
export class PaintProgram implements AfterViewInit {
  @ViewChild('windowFrame') private windowFrame?: WindowFrameComponent;

  protected store: AppService = inject(AppService);
  protected paintService: PaintService = inject(PaintService);

  protected menuFocus: string = '';
  private readonly toolbarButtons: Array<string> = ['file', 'edit', 'view', 'image', 'options', 'help'];

  protected coord: Coordinates = {
    x: 0,
    y: 0,
  };

  @ViewChild('canvas') private canvas?: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.ctx = this.canvas?.nativeElement.getContext("2d") as CanvasRenderingContext2D;
    this.drawRectangle(10, 10, 100, 100, "yellow", "red") // TODO remove
  }

  // ! Canvas Functions

  protected operationStart(): void {

  }

  protected operationEnd(): void {

  }

  /**
   * @description draws rectangles in Canvas space
   * @protected
   * @param startX starting x coordinate
   * @param startY starting y coordinate
   * @param endX ending x coordinate
   * @param endY ending y coordinate
   * @param fillColor color for rectangle fill
   * @param borderColor color for rectangle stroke
   */
  protected drawRectangle(startX: number, startY: number, endX: number, endY: number, fillColor: string | null, strokeColor: string | null): void {
    if (fillColor !== null) {
      this.ctx.fillStyle = fillColor;
      this.ctx.fillRect(startX, startY, endX, endY);
    }

    if (strokeColor !== null) {
      this.ctx.strokeStyle = strokeColor;
      // TODO linewidth?
      this.ctx.strokeRect(startX, startY, endX, endY);
    }
  }

  /**
   * @description draws ellipses
   * @param startX starting x coordinate
   * @param startY starting y coordinate
   * @param endX ending x coordinate
   * @param endY ending y coordinate
   * @param fillColor color for ellipse fill
   * @param borderColor color for ellipse stroke
   */
  protected drawEllipse(startX: number, startY: number, endX: number, endY: number, fillColor: string | null, strokeColor: string | null): void {
    // TODO ellipse fill
    if (fillColor !== null) {

    }

    // TODO ellipse stroke
    if (strokeColor !== null) {

    }
  }

  // ! Toolbar functions

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
  protected setNewCanvas(): void {}

  /**
   * @description saves HTML canvas drawing to PNG
   */
  protected saveDrawing(): void {}

  /**
   * @description opens HTML canvas drawing in browser printer dialog
   */
  protected printDrawing(): void {}

  /**
   * @description opens email client with HTML canvas drawing prepopulated
   */
  protected sendDrawing(): void {}

  /**
   * @description Closes Paint window
   */
  protected exitHandler(): void {
    this.windowFrame?.closeButtonHandler();
  }

  /**
   * @description undoes recent operations
   */
  protected undoHandler(): void {}

  /**
   * @description repeats undone operations
   */
  protected repeatHandler(): void {}

  /**
   * @description zooms HTML canvas
   */
  protected zoomHandler(): void {}
}
