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
   TODO delete this todo when below comment is handled in TS, leave below comment
   * Return 0 is only here because program could break on edge case if it isn't.
   * Any divide by 0 errors should be handled on the TypeScript side of things,
   * without this function being called, so technically this return 0 should
   * never actually be returned.
   */
  return 0;
}

EMSCRIPTEN_KEEPALIVE
double percent(double a) {
  return a; // TODO find out exactly what this function should do based on how it works on win95, might not need funtion
}

EMSCRIPTEN_KEEPALIVE
double exponent(double base, double exp) {
  const double init_base = base;
  const double init_exp = exp;

  if (init_base == 0) {
    /*
     TODO leave this todo until below comment is done, leave below comment, remove this toto
     * TypeScript should have logic to detect if  both base & exp == 0
     * If so, it needs to return a domain error.
     */
    return 0;
  }

  if (init_exp == 0) {
    if (init_base > 0) {
      return 1;
    }
    else {
      return -1;
    }
  }

  if (init_exp == 1 || init_base == 1 || init_base == -1) {
    return init_base;
  }
  else if (init_exp == -1) {
    return 1 / init_base;
  }

  if (init_base != 0 && init_base != 1 && !(init_exp == 0 && init_exp == 1 && init_exp == -1)) {
    if (exp < 0) {
      exp = exp + (-2 * exp);
    }

    for (int i = 1; i < exp; i++) {
      base = base * init_base;
    }

    if (init_base < 0 && base > 0 && init_exp > 0) { // Negative bases w/ positive exponent
      return -base;
    }
    else if (init_base > 0 && init_exp < 0) { // Positive base w/ negative exponent
      return 1/base;
    }
    else if (init_base < 0 && base > 0 && init_exp < 0) { // Negative base w/ negative exponent
      return 1/-base;
    }
  }

  return base;
}

EMSCRIPTEN_KEEPALIVE
double find_root(double root, double num) {
  return exponent(num, 1/root);  // Use exponent function to find root (square root of 9 = 9 ^ 1/2, 3 root of 9 = 9 ^ 1/3, etc.)
}
