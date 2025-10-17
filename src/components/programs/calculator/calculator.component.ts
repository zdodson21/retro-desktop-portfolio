import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { ToolbarButtonComponent } from '../../ui/toolbar/toolbar-button/toolbar-button.component';
import { ToolbarItemComponent } from '../../ui/toolbar/toolbar-item/toolbar-item.component';
import { ToolbarMenuComponent } from '../../ui/toolbar/toolbar-menu/toolbar-menu.component';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { CalculatorButtonComponent } from './components/calculator-button/calculator-button.component';

@Component({
  selector: 'calculator',
  imports: [WindowFrameComponent, ToolbarButtonComponent, ToolbarItemComponent, ToolbarMenuComponent, CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit {
  protected isScientific: boolean = false;
  protected menuFocus: string = '';
  protected store: AppService = inject(AppService);

  protected toolbarButtonHelper(event: MouseEvent, button: string): string {
    event?.stopPropagation();
    if (button === 'edit' && this.menuFocus === '') return 'edit';
    if (button === 'view' && this.menuFocus === '') return 'view';
    if (button === 'help' && this.menuFocus === '') return 'help';

    return '';
  }

  protected toolbarHoverHelper(button: string): void {
    if (this.menuFocus === 'edit' || this.menuFocus === 'view' || this.menuFocus === 'help') {
      this.menuFocus = button;
    }
  }

  // TODO add routing for standard and scientific, if route = anything else (other than null / '' / scientific) then it should auto change to ''
  // TODO '' router param should load it as standard as well

  /*
    ! WASM HTTP stuff is below here.
    ! Currently (10/15/2025) it is working, so DO NOT TOUCH IT UNLESS ADDING FUNCTION CALLING SAMPLES!!!
    ! Test thoroughly before pushing anything new to GitHub if below is modified.
    ! Any calculator logic should be written above this comment!
    ! Use below code as an example for how to "import" and call WASM functions.
  */
  private wasmModule: WebAssembly.Module | undefined;
  private wasmInstance: WebAssembly.Instance | undefined;
  private wasmExports: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadWasm();
  }

  private async loadWasm() {
    try {
      const wasmBuffer = await this.http.get('wasm/calculator.wasm', { responseType: 'arraybuffer' }).toPromise();

      const module = await WebAssembly.instantiate(wasmBuffer as ArrayBuffer);
      this.wasmModule = module;
      this.wasmInstance = module.instance;

      this.wasmExports = this.wasmInstance.exports;
    } catch (error) {
      console.error(`Error loading or instantiating wasm module: ${error}`);
    }
  }

  protected callWasmFunctions() {
    if (this.wasmExports) {
      const add = this.wasmExports.add;
      const subtract = this.wasmExports.subtract;
      const multiply = this.wasmExports.multiply;
      const divide = this.wasmExports.divide;
      const exponent = this.wasmExports.exponent;

      if (
        typeof add === 'function' &&
        typeof subtract === 'function' &&
        typeof multiply === 'function' &&
        typeof divide === 'function' &&
        typeof exponent === 'function'
      ) {
        console.log('Add 3 + 4: ', add(3, 4));
        console.log('Subtract 7 - 4:', subtract(7, 4));
        console.log('Multiply 7 * 3:', multiply(7, 3));
        console.log('Divide 8 / 4: ', divide(8, 4));
        console.log('2 to the power of 2: ', exponent(2, 2));
      } else {
        console.error('functions not found in WASM exports');
      }
    }
  }
}
