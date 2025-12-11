import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaintService {
  public pickedColor: string = '#000000';
  public pickedTool: string = '';
}
