import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'paint-color-option',
  imports: [NgStyle],
  templateUrl: './paint-color-option.component.html',
  styleUrl: './paint-color-option.component.scss',
})
export class PaintColorOptionComponent {
  @Input({ alias: 'color', required: true }) public color: string = 'transparent';
}
