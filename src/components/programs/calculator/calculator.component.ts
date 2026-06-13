import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { SystemService } from '../../../services/system/system.service';
import { ToolbarButtonComponent } from '../../ui/toolbar/toolbar-button/toolbar-button.component';
import { ToolbarItemComponent } from '../../ui/toolbar/toolbar-item/toolbar-item.component';
import { ToolbarMenuComponent } from '../../ui/toolbar/toolbar-menu/toolbar-menu.component';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { CalculatorButtonComponent } from './components/calculator-button/calculator-button.component';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { calculatorMode_e } from './enums/calculator-mode.enum';
import { subModeDec_e } from './enums/submode-dec.enum';
import { subModeRest_e } from './enums/submode-rest.enum';
import { operations_e } from './enums/operations.enum';
import { dualValueOperations_e } from './enums/dual-value-operations.enum';
import { calcButtons_e } from './enums/calc-buttons.enum';

@Component({
  selector: 'calculator',
  imports: [WindowFrameComponent, ToolbarButtonComponent, ToolbarItemComponent, ToolbarMenuComponent, CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit {
  // ! Window Management / Control
  protected isScientific: boolean = false;
  protected menuFocus: string = '';
  private readonly toolbarButtons: Set<string> = new Set(['edit', 'view', 'help']);
  protected store: AppService = inject(AppService);
  protected systemService: SystemService = inject(SystemService);
  protected devMode: boolean = environment.devMode;
  protected readonly htmlButtons = calcButtons_e;

  // ! Calculator Modes
  protected mode: number = calculatorMode_e.HEX;
  protected subModeDec: number = subModeDec_e.DEG;
  protected subModeRest: number = subModeRest_e.DWORD;

  // ! Memory
  protected memory: number | undefined; // Calculator memory
  protected seqMem: Array<number> = []; // Memory of all calculations

  protected operation: number = operations_e.NULL; // Operation to perform

  protected operationNum: number = 0; // Number to be used in operation. Allows pressing equal repeatedly
  protected useOpNum: boolean = false;
  protected calcPerformed: boolean = false;

  // ! Display
  protected currentDisplay: number | string = 0;
  protected displayInitState: boolean = true;

  // ! Arrays
  protected errors: Array<string> = [
    'Cannot divide by 0.', // 0 | Divide by 0 Error
    'Result of function is undefined.', // 1 | Domain Error
    'Could not call WASM function.', // 2
    'Function code incomplete.', // 3
    'TypeScript Logic Error', // 4
  ];

  protected singleValOperations: Set<number> = new Set([
    operations_e.SQ_RT,
    operations_e.ONE_OVER,
    operations_e.LN,
    operations_e.LOG,
    operations_e.SIN,
    operations_e.COS,
    operations_e.TAN,
    operations_e.N,
    operations_e.SQR,
    operations_e.CUBE,
    operations_e.EXP,
  ]);

  // ! Calculator Logic

  /**
   * @description finds the sum of addends a and b using WASM function
   * @param add_a 1st value to add
   * @param add_b 2nd value to add
   */
  protected add(add_a: number, add_b: number): number | string {
    const wasmAdd = this.wasmExports?.add;

    if (typeof wasmAdd === 'function') return wasmAdd(add_a, add_b);

    return this.errors[2];
  }

  /**
   * @description finds the difference of minuend - subtrahend using WASM function
   * @param minuend value to be subtracted from
   * @param subtrahend value to subtract by
   */
  protected subtract(minuend: number, subtrahend: number): number | string {
    const wasmSubtract = this.wasmExports?.subtract;

    if (typeof wasmSubtract === 'function') return wasmSubtract(minuend, subtrahend);

    return this.errors[2];
  }

  /**
   * @description finds the product of numbers a & b using WASM function
   * @param prod_a
   * @param prod_b
   */
  protected multiply(prod_a: number, prod_b: number): number | string {
    const wasmMultiply = this.wasmExports?.multiply;

    if (typeof wasmMultiply === 'function') return wasmMultiply(prod_a, prod_b);

    return this.errors[2];
  }

  /**
   * @description finds the quotient of the divided / divisor using WASM function
   * @param divided value to divide from
   * @param divisor value to divide by
   */
  protected divide(divided: number, divisor: number): number | string {
    const wasmDivide = this.wasmExports?.divide;

    if (divisor === 0) {
      return this.errors[0];
    } else if (typeof wasmDivide === 'function') {
      return wasmDivide(divided, divisor);
    }

    return this.errors[2];
  }

  /**
   * @description finds the quotient of 1 / x using WASM function
   * @param x divisor of dividend 1
   */
  protected oneOver(x: number): number | string {
    const wasmOneOver = this.wasmExports?.one_over;

    if (x === 0) {
      return this.errors[0];
    } else if (typeof wasmOneOver === 'function') {
      return wasmOneOver(x);
    }

    return this.errors[2];
  }

  protected percent(x: number, percent: number): number | string {
    const wasmPercent = this.wasmExports?.percent;

    if (typeof wasmPercent === 'function') return wasmPercent(x, percent);

    return this.errors[2];
  }

  /**
   * @description finds the square root of radicand using WASM function
   * @param radicand value to find square root of
   */
  protected sqRoot(radicand: number): number | string {
    const wasmSqRoot = this.wasmExports?.sq_root;

    if (radicand < 0) {
      return this.errors[1];
    } else if (typeof wasmSqRoot === 'function') {
      return wasmSqRoot(radicand);
    }

    return this.errors[2];
  }

  /**
   * @description finds natural logarithm of provided value using WASM function
   * @param arg value to find natural logarithm of
   */
  protected ln(arg: number): number | string {
    const wasmLn = this.wasmExports?.ln;

    if (arg <= 0) {
      return this.errors[1];
    } else if (typeof wasmLn === 'function') {
      return wasmLn(arg);
    }

    return this.errors[2];
  }

  /**
   * @description finds exponent of base and argument using WASM function
   * @param base value to find exponent of (the subscript part)
   * @param arg value that base ^ exponent is equal to
   */
  protected log(base: number, arg: number): number | string {
    const wasmLog = this.wasmExports?.log;

    // https://mathsathome.com/logarithm-laws/
    if (base <= 0 || base === 1 || arg <= 0) {
      return this.errors[1];
    } else if (typeof wasmLog === 'function') {
      return wasmLog(base, arg);
    }

    return this.errors[2];
  }

  /**
   * @description sets base to power of exp using WASM function
   * @param base base value
   * @param exp exponent value
   */
  protected exponent(base: number, exp: number): number | string {
    const wasmExponent = this.wasmExports?.exponent;

    if (this.isWholeNum(exp)) {
      // TODO remove when no longer needed
      if (typeof wasmExponent === 'function') {
        return wasmExponent(base, exp);
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
    const wasmRoot = this.wasmExports?.root;

    if (this.isEven(index) && radicand < 0) {
      return this.errors[1];
    } else if (typeof wasmRoot === 'function') {
      return wasmRoot(index, radicand);
    }

    return this.errors[2];
  }

  // ! Calculator Helpers

  /**
   * @description determines if provided value is whole number or not using WASM function
   * @param x value
   */
  protected isWholeNum(x: number): boolean | string {
    const wasmIsWholeNum = this.wasmExports?.is_whole_num;

    if (typeof wasmIsWholeNum === 'function') {
      return wasmIsWholeNum(x);
    }

    return this.errors[2];
  }

  /**
   * @description determines if provided value is even or not using WASM function
   * @param x value
   */
  protected isEven(x: number): boolean | string {
    const wasmIsEven = this.wasmExports?.is_even;

    if (typeof wasmIsEven === 'function') {
      return wasmIsEven(x);
    }

    return this.errors[2];
  }

  // ! DOM || Calculator Logic

  /**
   * @description called by all buttons on click. Handles interpretation of button press for any non numbers
   * @param input calculator button numbers of strings (operators)
   */
  protected calculatorButtonHelper(input: number): void {
    switch (input) {
      // ! Clearing controls

      case calcButtons_e.BACK:
        let string = this.currentDisplay.toString();
        if (!this.errorDisplayed()) {
          if (this.currentDisplay.toString().length === 1) {
            this.currentDisplay = 0;
          } else {
            this.currentDisplay = string.substring(0, string.length - 1);
          }
        }
        break;

      case calcButtons_e.CE:
        this.currentDisplay = 0;
        this.displayInitState = true;
        break;

      case calcButtons_e.C:
        this.seqMem = [];
        this.operation = operations_e.NULL;
        this.calcPerformed = false;
        this.currentDisplay = 0;
        this.displayInitState = true;
        break;

      // ! Memory Controls

      case calcButtons_e.MC:
        this.memory = undefined;
        break;

      case calcButtons_e.MR:
        if (typeof this.memory === 'number') this.currentDisplay = this.memory;
        break;

      case calcButtons_e.MS:
        if (!this.errorDisplayed()) this.memory = +this.currentDisplay;
        break;

      case calcButtons_e.MPLUS:
        if (typeof this.memory === 'undefined') {
          this.memory = +this.currentDisplay;
        } else {
          this.memory += +this.currentDisplay;
        }

        break;

      // ! Arithmetic Operations

      case calcButtons_e.ADD:
        this.useOpNum = false;
        this.operation = operations_e.ADD;

        if (!this.errorDisplayed()) this.seqMem.push(+this.currentDisplay);

        this.displayInitState = true;
        this.calcPerformed = false;

        break;

      case calcButtons_e.SUBTRACT:
        this.useOpNum = false;
        this.operation = operations_e.SUBTRACT;

        if (!this.errorDisplayed()) this.seqMem.push(+this.currentDisplay);

        this.displayInitState = true;
        this.calcPerformed = false;

        break;

      case calcButtons_e.MULTIPLY:
        this.useOpNum = false;
        this.operation = operations_e.MULTIPLY;

        if (!this.errorDisplayed()) this.seqMem.push(+this.currentDisplay);

        this.displayInitState = true;
        this.calcPerformed = false;

        break;

      case calcButtons_e.DIVIDE:
        this.useOpNum = false;
        this.operation = operations_e.DIVIDE;

        if (!this.errorDisplayed()) this.seqMem.push(+this.currentDisplay);

        this.displayInitState = true;
        this.calcPerformed = false;

        break;

      // ! Single Value Operations

      case calcButtons_e.SQ_RT:
        this.useOpNum = false;
        this.operation = operations_e.SQ_RT;

        if (!this.errorDisplayed()) this.seqMem.push(+this.currentDisplay);
        if (this.seqMem.length > 0) this.performOperation(this.operation);

        break;

      case calcButtons_e.PERCENT:
        this.useOpNum = false;

        if (this.seqMem.length > 0 && !this.errorDisplayed()) {
          this.currentDisplay = this.percent(this.seqMem[this.seqMem.length - 1], +this.currentDisplay);
        }

        break;

      case calcButtons_e.ONE_OVER:
        this.useOpNum = false;
        this.operation = operations_e.ONE_OVER;

        if (!this.errorDisplayed()) this.seqMem.push(+this.currentDisplay);
        if (this.seqMem.length > 0) this.performOperation(this.operation);

        break;

      // ! Solve

      case calcButtons_e.EQUALS:
        if (!this.useOpNum && !this.singleValOperations.has(this.operation)) {
          this.operationNum = +this.currentDisplay;
          this.useOpNum = true;
        }

        if (this.seqMem[this.seqMem.length - 1] !== this.operationNum && this.useOpNum) {
          this.seqMem.push(this.operationNum);
        }

        if (this.seqMem.length >= 2) {
          this.performOperation(this.operation);
        }

        break;

      // ! Value Modifiers

      case calcButtons_e.POS_NEG: // Switch between positive and negative
        if (!this.errorDisplayed()) this.currentDisplay = -+this.currentDisplay;
        break;

      case calcButtons_e.DECIMAL:
        if (this.displayInitState) {
          this.currentDisplay = '0' + '.';
          this.displayInitState = false;
        } else {
          this.currentDisplay += '.';
        }

        break;

      // ! Variables

      case calcButtons_e.PI:
        this.currentDisplay = 3.14159265359;
        this.displayInitState = false;
        break;
    }
  }

  /**
   * @description Determines if an error is currently displayed
   * @returns boolean
   */
  protected errorDisplayed(): boolean {
    return this.errors.includes(this.currentDisplay.toString());
  }

  /**
   * @description handles number button events
   * @param input the value of the button pressed
   */
  protected numberButtonHelper(input: number): void {
    if (this.calcPerformed) {
      this.operationNum = 0;
      this.operation = operations_e.NULL;
      this.calcPerformed = false;
    }

    if (this.displayInitState) {
      this.currentDisplay = '' + input;
      this.displayInitState = false;
    } else {
      this.currentDisplay = '' + this.currentDisplay + input;
    }
  }

  /**
   * @description handles calling calculator operation functions based provided input
   * @param operation the operation to perform
   */
  protected performOperation(operation: number): void {
    switch (operation) {
      // ! Standard Operations

      case operations_e.ADD:
        this.dualValueHelper(dualValueOperations_e.ADD);
        break;

      case operations_e.SUBTRACT:
        this.dualValueHelper(dualValueOperations_e.SUBTRACT);
        break;

      case operations_e.MULTIPLY:
        this.dualValueHelper(dualValueOperations_e.MULTIPLY);
        break;

      case operations_e.DIVIDE:
        this.dualValueHelper(dualValueOperations_e.DIVIDE);
        break;

      case operations_e.ONE_OVER:
        let quotient: number | string = this.oneOver(this.seqMem[this.seqMem.length - 1]);

        if (typeof quotient === 'number') this.seqMem.push(quotient);

        this.currentDisplay = quotient;
        this.calcPerformed = true;

        break;

      case operations_e.SQ_RT:
        let solution: number | string = this.sqRoot(this.seqMem[this.seqMem.length - 1]);

        if (typeof solution === 'number') this.seqMem.push(solution);

        this.currentDisplay = solution;
        this.calcPerformed = true;

        break;

      // ! Scientific Operations

      default:
        if (operation !== operations_e.NULL) this.currentDisplay = this.errors[4];
    }

    this.displayInitState = true;
  }

  /**
   * @description determines and performs operations that require two values
   * @param operation operation to perform (ex: add, subtract, multiply, divide, etc.)
   */
  protected dualValueHelper(operation: number): void {
    const VALUE_1 = this.seqMem[this.seqMem.length - 2];
    const VALUE_2 = this.seqMem[this.seqMem.length - 1];
    let solution: number | string;

    switch (operation) {
      case dualValueOperations_e.ADD:
        solution = this.add(VALUE_1, VALUE_2);
        break;

      case dualValueOperations_e.SUBTRACT:
        solution = this.subtract(VALUE_1, VALUE_2);
        break;

      case dualValueOperations_e.MULTIPLY:
        solution = this.multiply(VALUE_1, VALUE_2);
        break;

      case dualValueOperations_e.DIVIDE:
        solution = this.divide(VALUE_1, VALUE_2);
        break;

      default:
        solution = this.errors[4];
    }

    if (typeof solution === 'number') this.seqMem.push(solution);

    this.calcPerformed = true;
    this.currentDisplay = solution;
  }

  /**
   * @description helps set toolbar menu focus
   * @param event mouse event
   * @param button label for the button and its menu
   */
  protected toolbarButtonHelper(event: MouseEvent, button: string): string {
    event?.stopPropagation();

    if (this.menuFocus === '' && this.toolbarButtons.has(button)) return button;

    return '';
  }

  /**
   * @description assists with toolbar button hover events
   * @param button label for the button and its menu
   */
  protected toolbarHoverHelper(button: string): void {
    if (this.toolbarButtons.has(this.menuFocus)) this.menuFocus = button;
  }

  /**
   * @description copies the value currently displayed in output
   */
  protected copyOutput(): void {
    navigator.clipboard.writeText(this.currentDisplay.toString());
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
  private http: HttpClient = inject(HttpClient);

  ngOnInit(): void {
    this.loadWasm();
  }

  /**
   * @description loads WASM file
   */
  // TODO fix deprecated .toPromise function
  private async loadWasm() {
    try {
      const wasmBuffer = await lastValueFrom(this.http.get('wasm/calculator.wasm', { responseType: 'arraybuffer' }));

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
