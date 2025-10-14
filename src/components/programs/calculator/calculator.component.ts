import { Component, OnInit } from '@angular/core';
import { WindowFrameComponent } from '../../window-frame/window-frame.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'calculator',
  imports: [WindowFrameComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit {
  protected isScientific: boolean = false;

  private wasmModule: WebAssembly.Module | undefined;
  private wasmInstance: WebAssembly.Instance | undefined;
  private wasmExports: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.loadWasm();
  }

  async loadWasm() {
    try {
      const wasmBuffer = await this.http.get('wasm/calculator.wasm', {responseType: 'arraybuffer'}).toPromise();

      const module = await WebAssembly.instantiate(wasmBuffer as ArrayBuffer);
      this.wasmModule = module;
      this.wasmInstance = module.instance;

      this.wasmExports = this.wasmInstance.exports;

      this.callWasmFunctions();
    } catch (error) {
      console.error(`Error loading or instantiating wasm module: ${error}`)
    }
  }

  callWasmFunctions() {
    if (this.wasmExports) {
      const add = this.wasmExports.add;
      const subtract = this.wasmExports.subtract;

      if (typeof add === 'function' && typeof subtract === 'function') {
        console.log('Add 3 + 4:', add(3, 4));
        console.log('Subtract 7 - 4:', subtract(7, 4))
      } else {
        console.error('functions not found in WASM exports')
      }
    }
  }

  // TODO add routing for standard and scientific, if route = anything else (other than null / '' / scientific) then it should auto change to ''
  // TODO '' router param should load it as standard as well
}
