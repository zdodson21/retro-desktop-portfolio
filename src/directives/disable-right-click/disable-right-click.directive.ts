import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[DisableRightClick]',
})
export class DisableRightClickDirective {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: Event): void {
    event.preventDefault();
  }
}
