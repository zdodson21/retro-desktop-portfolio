import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaintService {
  public readonly topColorRow: Array<string> = [
    '#000000',
    '#808080',
    '#800000',
    '#808000',
    '#008000',
    '#008080',
    '#000080',
    '#800080',
    '#808040',
    '#004040',
    '#0080FF',
    '#004080',
    '#4000FF',
    '#804000',
  ];

  public readonly bottomColorRow: Array<string> = [
    '#FFFFFF',
    '#C0C0C0',
    '#FF0000',
    '#FFFF00',
    '#00FF00',
    '#00FFFF',
    '#0000FF',
    '#FF00FF',
    '#FFFF80',
    '#00FF80',
    '#80FFFF',
    '#8080FF',
    '#FF0080',
    '#FF8040',
  ];

  public primaryColor: WritableSignal<string> = signal('#000000');
  public secondaryColor: WritableSignal<string> = signal('#FFFFFF');

  public currTool: string = 'pencil';
}
