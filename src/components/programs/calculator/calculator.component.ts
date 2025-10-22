import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { CalculatorButtonPresses } from '../../../interfaces/calculator-button-presses';
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
  protected memory: Array<number> = [];
  protected displayedMemItem: number | undefined = 5; // TODO remove sample number
  protected mode: number = 1; // 0 = Hex | 1 = Dec | 2 = Oct | 3 = Bin
  protected subModeDec: number = 0; // 0 = Deg | 1 = Rad | 2 = Grad
  protected subModeRest: number = 0; // 0 = Dword | 1 = Word | 2 = Byte
  protected firstButtonPressed: boolean = false;
  protected currentDisplay: number | string = 0;
  protected errors: Array<string> = [
    'Divide by 0 Error', // 0
    'Domain Error', // 1
    'WASM Function Error', // 2
    'Incomplete Code Error', // 3
    'TypeScript Logic Error', // 4
  ];
  protected operationMemory: CalculatorButtonPresses = {
    valueA: 0,
    valueB: undefined,
    operation: '',
  };
  protected singleValueFunctions: Array<string> = [];
  protected dualValueFunctions: Array<string> = ['add', 'subtract', 'multiply', 'divide'];

  // ! Calculator Logic

  /**
   * @description finds the sum of addends a and b using WASM function
   * @param add_a 1st value to add
   * @param add_b 2nd value to add
   */
  protected add(add_a: number, add_b: number): number | string {
    const add = this.wasmExports?.add;

    if (typeof add === 'function') {
      return add(add_a, add_b);
    }

    return this.errors[2];
  }

  /**
   * @description finds the difference of minuend - subtrahend using WASM function
   * @param minuend value to be subtracted from
   * @param subtrahend value to subtract by
   */
  protected subtract(minuend: number, subtrahend: number): number | string {
    const subtract = this.wasmExports?.subtract;

    if (typeof subtract === 'function') {
      return subtract(minuend, subtrahend);
    }

    return this.errors[2];
  }

  /**
   * @description finds the product of numbers a & b using WASM function
   * @param prod_a
   * @param prod_b
   */
  protected multiply(prod_a: number, prod_b: number): number | string {
    const multiply = this.wasmExports?.multiply;

    if (typeof multiply === 'function') {
      return multiply(prod_a, prod_b);
    }

    return this.errors[2];
  }

  /**
   * @description finds the quotient of the divided / divisor using WASM function
   * @param divided value to divide from
   * @param divisor value to divide by
   */
  protected divide(divided: number, divisor: number): number | string {
    const divide = this.wasmExports?.divide;

    if (divisor === 0) {
      return this.errors[0];
    } else if (typeof divide === 'function') {
      return divide(divided, divisor);
    }

    return this.errors[2];
  }

  /**
   * @description finds the quotient of 1 / x using WASM function
   * @param x divisor of dividend 1
   */
  protected oneOver(x: number): number | string {
    const oneOver = this.wasmExports?.one_over;

    if (x === 0) {
      return this.errors[0];
    } else if (typeof oneOver === 'function') {
      return oneOver(x);
    }

    return this.errors[2];
  }

  /**
   * @description finds the square root of radicand using WASM function
   * @param radicand value to find square root of
   */
  protected sqRoot(radicand: number): number | string {
    const sqRoot = this.wasmExports?.sqroot;

    if (radicand < 0) {
      return this.errors[1];
    } else if (typeof sqRoot === 'function') {
      return sqRoot(radicand);
    }

    return this.errors[2];
  }

  /**
   * @description finds natural logarithm of provided value using WASM function
   * @param arg value to find natural logarithm of
   */
  protected ln(arg: number): number | string {
    const ln = this.wasmExports?.ln;

    if (arg <= 0) {
      return this.errors[1];
    } else if (typeof ln === 'function') {
      return ln(arg);
    }

    return this.errors[2];
  }

  /**
   * @description finds exponent of base and arguement using WASM function
   * @param base value to find exponent of (the subscript part)
   * @param arg value that base ^ exponent is equal to
   */
  protected log(base: number, arg: number): number | string {
    const log = this.wasmExports?.log;

    // https://mathsathome.com/logarithm-laws/
    if (base <= 0 || base === 1 || arg <= 0) {
      return this.errors[1];
    } else if (typeof log === 'function') {
      return log(base, arg);
    }

    return this.errors[2];
  }

  /**
   * @description sets base to power of exp using WASM function
   * @param base base value
   * @param exp exponent value
   */
  protected exponent(base: number, exp: number): number | string {
    const exponent = this.wasmExports?.exponent;

    if (this.isWholeNum(exp)) {
      // TODO remove when no longer needed
      if (typeof exponent === 'function') {
        return exponent(base, exp);
      }
    } else {
      return this.errors[3];
    }

    return this.errors[2];
  }

  /**
   * @description finds index root of radicand using WASM function
   * @param index (ex: square root, cube root, 4th root, etc.)
   * @param radicand value to find index root of
   */
  protected root(index: number, radicand: number): number | string {
    const root = this.wasmExports?.root;

    if (this.isEven(index) && radicand < 0) {
      return this.errors[1];
    } else if (typeof root === 'function') {
      return root(index, radicand);
    }

    return this.errors[2];
  }

  // ! Calculator Helpers

  /**
   * @description determines if provided value is whole number or not using WASM function
   * @param x value
   */
  protected isWholeNum(x: number): boolean | string {
    const isWholeNum = this.wasmExports?.is_whole_num;

    if (typeof isWholeNum === 'function') {
      return isWholeNum(x);
    }

    return this.errors[2];
  }

  /**
   * @description determines if provided value is even or not using WASM function
   * @param x value
   */
  protected isEven(x: number): boolean | string {
    const isEven = this.wasmExports?.is_even;

    if (typeof isEven === 'function') {
      return isEven(x);
    }

    return this.errors[2];
  }

  // ! DOM || Calculator Logic

  /**
   * @description called by all buttons on click. Handles interpretation of button press
   * @param input calulator button numbers of strings (operators)
   */
  protected calculatorButtonHelper(input: number | string): void {
    if (typeof input === 'number') {
      if (this.firstButtonPressed) {
        this.operationMemory.valueA = input;
      }
    } else if (typeof input === 'string') {
      // Dictate which operation will occur
    }

    // If function and certain conditions exist then call perform operation appropriately

    if (!this.firstButtonPressed) this.firstButtonPressed = true;
  }

  /**
   * @description handles calling calculator operation functions based provided input
   * @param operation the operation to perform
   */
  protected performOperation(operation: string): void {
    let newValue: number | string | undefined;

    switch (operation) {
      case 'add':
        if (typeof this.operationMemory.valueA === 'number' && typeof this.operationMemory.valueB === 'number')
          newValue = this.add(this.operationMemory.valueA, this.operationMemory.valueB);
        break;

      case 'subtract':
        if (typeof this.operationMemory.valueA === 'number' && typeof this.operationMemory.valueB === 'number')
          newValue = this.subtract(this.operationMemory.valueA, this.operationMemory.valueB);
        break;

      case 'multiply':
        if (typeof this.operationMemory.valueA === 'number' && typeof this.operationMemory.valueB === 'number')
          newValue = this.multiply(this.operationMemory.valueA, this.operationMemory.valueB);
        break;

      case 'divide':
        if (typeof this.operationMemory.valueA === 'number' && typeof this.operationMemory.valueB === 'number')
          newValue = this.divide(this.operationMemory.valueA, this.operationMemory.valueB);
        break;

      case 'oneOver':
        if (typeof this.operationMemory.valueA === 'number') newValue = this.oneOver(this.operationMemory.valueA);
        break;

      case 'sqRoot':
        if (typeof this.operationMemory.valueA === 'number') newValue = this.sqRoot(this.operationMemory.valueA);
        break;

      default:
        newValue = this.errors[4];
    }

    if (typeof newValue === 'number' || typeof newValue === 'string') {
      this.operationMemory = {
        valueA: newValue,
        valueB: undefined,
        operation: '',
      };
    }
  }

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

  /**
   * @description copies the value currently displayed in output
   */
  protected copyOutput(): void {
    if (!this.errors.includes(this.currentDisplay.toString())) navigator.clipboard.writeText(this.currentDisplay.toString());
  }

  // TODO add routing for standard and scientific, if route = anything else (other than null / '' / scientific) then it should auto change to ''
  // TODO '' router param should load it as standard as well
  // TODO can use Internet Explorer for this
  // TODO this feature should be implemented but unreachable except by modifying the route. The button should be disabled

  /*
    ! WASM HTTP stuff is below here.
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

  /**
   * @description loads WASM file
   */
  // TODO fix deprecated .toPromise function
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

  /**
   * @description test function to test calling WASM functions, also serves as an example
   */
  protected callWasmFunctions() {
    if (this.wasmExports) {
      const add = this.wasmExports.add;
      const subtract = this.wasmExports.subtract;
      const multiply = this.wasmExports.multiply;
      const divide = this.wasmExports.divide;
      const exponent = this.wasmExports.exponent;
      // TODO add samples for one over & sqrt

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
