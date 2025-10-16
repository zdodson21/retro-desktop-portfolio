/*
 * Emscripten is required to compile this file to WebAssembly.
 * https://emscripten.org/
 *
 * WASM Build Command (from calculator directory):
 *    emcc -Os calculator.c -o ../../../wasm/calculator.wasm --no-entry
 *
 * A makefile is available in the root of this project.
 * Run this command (from root of project) to compile this file to WebAssembly using MAKE:
 *    make calculator
 */

#if defined(__EMSCRIPTEN__)
  #include <emscripten.h>
#else
  #define EMSCRIPTEN_KEEPALIVE
#endif

EMSCRIPTEN_KEEPALIVE
double add(double a, double b) {
  return a + b;
}

EMSCRIPTEN_KEEPALIVE
double subtract(double minuend, double subtrahend) {
  return minuend - subtrahend;
}

EMSCRIPTEN_KEEPALIVE
double multiply(double a, double b) {
  return a * b;
}

EMSCRIPTEN_KEEPALIVE
double divide(double dividend, double divisor) {
  if (divisor != 0) {
    return dividend / divisor;
  }

  /*
   * Return 0 is only here because program could break on edge case if it isn't.
   * Any divide by 0 errors should be handled on the TypeScript side of things,
   * without this function being called, so technically this return 0 should
   * never actually be returned.
   */
  return 0;
}

EMSCRIPTEN_KEEPALIVE
double find_root(double root, double num) {
  return num + root; // TODO obviously not done, just init setup
}

EMSCRIPTEN_KEEPALIVE
double percent(double a) {
  return a; // TODO find out exactly what this function should do based on how it works on win95, might not need funtion
}
